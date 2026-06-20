# Environment Variables with dotenvx

This project uses [dotenvx](https://dotenvx.com) for secure environment variable management.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your encryption key

For local development, create a `.env.keys` file with your encryption key:

```bash
# Generate a new key
npx dotenvx key generate --file .env.keys

# Or set the key as an environment variable
export DOTENVX_KEY=dotenv://:key_your_key_here
```

### 3. Configure your secrets

Edit `.env` with your environment variables:

```bash
# The .env file can be encrypted and committed to the repo
# Edit it with:
npx dotenvx edit
```

## Usage

### Run tests with dotenvx

All npm scripts automatically use dotenvx:

```bash
npm test
npm run test:headed
npm run test:ui
```

### Manual dotenvx commands

```bash
# Encrypt the .env file
npm run dotenvx:encrypt

# Decrypt the .env file (for editing)
npm run dotenvx:decrypt

# Run a command with loaded environment
npm run dotenvx:run -- <your-command>
```

## Files

- `.env` - Environment file (can be encrypted and committed to repo)
- `.env.keys` - Encryption key file (NOT committed to repo - see .gitignore)
- `.env.example` - Example file for reference

## GitHub Integration

The `.env` file can be safely committed to GitHub. The encryption key (`.env.keys`) is in `.gitignore` and should be set up separately in your CI/CD environment.

### GitHub Actions Example

```yaml
- name: Install dependencies
  run: npm install
- name: Set encryption key
  env:
    DOTENVX_KEY: ${{ secrets.DOTENVX_KEY }}
  run: echo "DOTENVX_KEY=${DOTENVX_KEY}" > demo-orangehrmlive-tests/.env.keys
- name: Run tests
  run: npm test
```

Add `DOTENVX_KEY` to your GitHub repository secrets.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_URL` | The base URL for the OrangeHRM application | `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login` |
| `USERNAME` | Login username | `Admin` |
| `PASSWORD` | Login password | `admin123` |