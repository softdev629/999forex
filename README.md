# 999.forex Trading Platform

A modern, high-performance trading platform built with React and TypeScript, offering advanced trading features and real-time market data.

## Features

- 🚀 High-Frequency Trading Support
- 📊 Real-time Market Data
- 💱 Multi-Asset Trading (Forex, Crypto, Stocks, Commodities)
- 📱 Responsive Mobile Design
- 🔒 Secure Authentication System
- 📈 Advanced Charting Tools
- 🤖 API Integration for Automated Trading
- 🎨 Modern UI with TailwindCSS
- 🌐 Multi-language Support
- 📱 Progressive Web App (PWA)

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Query
- **Forms**: React Hook Form, Zod
- **UI Components**: Radix UI
- **Charts**: TradingView Integration
- **Authentication**: JWT

## Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Security

For security concerns, please email security@999.forex

---

Built with ❤️ by the 999.forex team.
