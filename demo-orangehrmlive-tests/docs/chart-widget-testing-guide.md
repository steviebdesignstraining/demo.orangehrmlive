# Chart Widget Testing Guide

Simple guide for testing dashboard pie charts in Playwright.

Use this when a widget **might not always show** (permissions, role, demo setup).

---

## What we are testing

Two dashboard widgets:

1. **Employee Distribution by Sub Unit**
2. **Employee Distribution by Location**

Each widget should have:

- A **pie chart** (`canvas` inside `.oxd-pie-chart`)
- A **legend** (list of labels like Engineering, Texas R&D)
- **Dynamic data** (labels come from the app, not hard-coded in the test)

---

## The big idea (3 steps)

```
Step 1: Is the widget on the page?
           |
           +-- NO  -> stop (test passes, nothing to check)
           |
           +-- YES -> go to Step 2

Step 2: Is the chart visible?
           |
           +-- check canvas exists
           +-- check canvas has width and height > 0

Step 3: Is the legend data real?
           |
           +-- check at least 1 legend item
           +-- check each label has text
           +-- check each color key is visible
```

---

## File map (where the code lives)

| File | What it does |
|------|--------------|
| `selectors/dashboardSelectors/dashboard.selectors.ts` | CSS selectors for chart parts |
| `test-data/dashboard/dashboard.config.ts` | Required vs optional widgets |
| `utils/optionalElement.ts` | Helper: only check if element exists |
| `pages/dashboardPages/dashboard.pages.ts` | Chart check logic |
| `tests/dashboardTests/positiveDashboard.spec.ts` | Test that calls the page object |

---

## Part 1: Selectors (find the chart on the page)

Selectors are just "addresses" for elements.

```ts
pieChart: '.oxd-pie-chart',
pieChartCanvas: '.oxd-pie-chart canvas',
chartLegend: '.oxd-chart-legend',
chartLegendItem: '.oxd-chart-legend li',
chartLegendLabel: '.oxd-chart-legend li span.oxd-text',
chartLegendColorKey: '.oxd-chart-legend-key',
```

Widget selectors (find the whole box):

```ts
subUnitDistributionWidget:
  '.oxd-grid-item.orangehrm-dashboard-widget:has-text("Employee Distribution by Sub Unit")',

locationDistributionWidget:
  '.oxd-grid-item.orangehrm-dashboard-widget:has-text("Employee Distribution by Location")',
```

---

## Part 2: Optional widgets (the safety net)

Some widgets may not show for every user.

In `dashboard.config.ts`:

```ts
export const optionalDashboardWidgets = [
  'buzz',
  'subUnitDistribution',
  'locationDistribution',
];
```

**Required widgets** = test fails if missing.

**Optional widgets** = test skips if missing.

---

## Part 3: Helper functions

File: `utils/optionalElement.ts`

### `isPresent(locator)`

Ask: "Is this on the page?"

```ts
if (!(await isPresent(widget))) {
  return; // widget not there, stop quietly
}
```

### `expectVisibleIfPresent(locator)`

Ask: "If it is on the page, is it visible?"

Used in `verifyDashboardDisplayed()` for optional widgets.

---

## Part 4: Chart check logic

File: `pages/dashboardPages/dashboard.pages.ts`

### Main method (calls both charts)

```ts
async verifyEmployeeDistributionChartsDisplayed() {
  await this.verifySubUnitDistributionWidgetDisplayed();
  await this.verifyLocationDistributionWidgetDisplayed();
}
```

### Each chart method (same pattern)

```ts
async verifySubUnitDistributionWidgetDisplayed() {
  const widget = this.getSubUnitDistributionWidget();

  if (!(await isPresent(widget))) {
    return;
  }

  await this.verifyDistributionChartWidget(widget);
}
```

### Shared chart checks (`verifyDistributionChartWidget`)

This is the reusable part. Copy this pattern for other charts.

| Check | Why |
|-------|-----|
| Widget visible | Box is on screen |
| `.oxd-pie-chart` visible | Chart container exists |
| `canvas` visible | Chart actually rendered |
| Canvas width/height > 0 | Chart is not empty |
| Legend visible | Labels exist |
| Legend count > 0 | Has data |
| Each label has text | Data is dynamic (not blank) |
| Each color key visible | Legend matches chart colors |

We do **not** hard-code names like "Engineering".

We only check that labels exist and have text.

That proves data is loaded from the app.

---

## Part 5: The test file

File: `tests/dashboardTests/positiveDashboard.spec.ts`

```ts
test("Employee distribution charts display with dynamic legend data", async ({
  dashboardPage,
}) => {
  await dashboardPage.verifyEmployeeDistributionChartsDisplayed();
});
```

The test stays short.

The page object holds the detail.

---

## How to copy this for another widget

1. **Add a selector** for the widget container.
2. **Add a getter** in the page object: `getMyWidget()`.
3. **Decide**: required or optional?
   - Optional -> add name to `optionalDashboardWidgets`.
4. **Write a verify method**:
   - Step 1: `if (!(await isPresent(widget))) return;`
   - Step 2: check the parts you care about (chart, list, text, etc.)
5. **Add a test** that calls your verify method.

---

## Quick checklist

- [ ] Selector finds the widget
- [ ] Optional widgets use `isPresent` before strict checks
- [ ] Chart canvas is visible and has size
- [ ] Legend has at least 1 item
- [ ] Legend labels are not empty
- [ ] Test calls one page object method (keep test file clean)

---

## Run the test

From `demo-orangehrmlive-tests`:

```bash
npx playwright test positiveDashboard.spec.ts -g "Employee distribution"
```

Or run all dashboard tests:

```bash
npx playwright test positiveDashboard.spec.ts
```
