# MingwSync

A VS Code extension that eliminates the friction of setting up MinGW-w64 on Windows. MingwSync treats MSYS2/MinGW-w64 like NPM works for Node.js or Pip works for Python—with zero-config installation, intelligent dependency management, and seamless developer experience.

## The Problem

Setting up MinGW-w64 on Windows is painful:
- Manually opening MSYS2 terminals and running pacman commands
- Finding library installation paths and manually updating JSON configuration files
- Cryptic compiler errors when libraries aren't found
- Silent crashes with no meaningful error messages
- Slow compilation times and executable bloat
- Struggling to share projects across team members

## The Solution

MingwSync is a smart package bridge that provides:

### Core Features

1. **Include-Driven Auto-Installation** - Detects missing libraries and installs them automatically
2. **Environment Isolation Profile** - Project-specific mingw.json for dependency tracking
3. **Automated Toolchain Mapping** - Auto-detects MINGW64, UCRT64, or CLANG64
4. **Warp-Speed Compilation Cache** - Zero-config ccache-like caching
5. **Deep Windows Crash Diagnostics** - SEH to signal translation
6. **Visual Dependency Graph** - Interactive dependency visualization
7. **Zero-Config Static Linking** - One-click portable executable builds
8. **Toolchain Flavor Upgrader** - Auto-upgrade MSVCRT to UCRT64
9. **MSVC-to-MinGW Converter** - Import Visual Studio projects
10. **Smart Multi-Threaded Build Orchestrator** - Hardware-aware parallel compilation

## Installation

1. Install from VS Code Extensions Marketplace (coming soon)
2. Install MSYS2 if not already present
3. Open a C++ project folder in VS Code
4. MingwSync will automatically detect your environment

## Development

### Prerequisites
- Node.js 16+
- npm or yarn
- VS Code 1.70+
- TypeScript 4.7+

### Setup
```bash
npm install
npm run compile
```

### Run
Press `F5` in VS Code to launch the extension in debug mode.

## Project Structure

Each feature is developed in its own branch:
- `feature/core-extension-setup` - Extension entry point and activation
- `feature/toolchain-detection` - MinGW-w64 detection and analysis
- `feature/include-auto-installation` - Dependency analyzer and auto-installer
- `feature/compilation-cache` - Build caching system
- `feature/crash-diagnostics` - Windows crash diagnostics
- `feature/bloat-analyzer` - Executable bloat analysis
- `feature/static-linking` - Static linking utilities
- `feature/toolchain-upgrader` - Toolchain upgrade management
- `feature/parallel-build-orchestrator` - Multi-threaded build system
- `feature/msvc-converter` - Visual Studio project converter

## License

MIT
