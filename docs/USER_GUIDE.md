# MingwSync User Guide

## Getting Started

### Installation

1. Install VS Code Extension from Marketplace
2. Ensure MSYS2 is installed on your system
3. Open your C++ project in VS Code

### Initial Setup

1. Click on the MingwSync status bar item
2. Select "Configure Project"
3. MingwSync will create a `mingw.json` file
4. Reload VS Code

## Features

### Include-Driven Auto-Installation

When you use `#include <library.h>` and the library is missing:

1. MingwSync detects the missing include
2. A notification appears: "Library 'library' not found. Click here to install via MinGW-w64"
3. Click to automatically install via MSYS2 pacman

### Portable Executable Building

To create a standalone executable:

1. Click the "Build Portable" button in the status bar
2. MingwSync automatically adds static linking flags
3. Your executable will run on any Windows machine

### Bloat Analysis

To analyze your executable size:

1. Build your project
2. Run `MingwSync: Analyze Executable Bloat`
3. View detailed section breakdown and optimization suggestions

### Toolchain Detection

Run `MingwSync: Detect MinGW-w64 Toolchain` to see:

- Detected toolchain flavor (MINGW64, UCRT64, CLANG64)
- Current runtime version
- Installation path
- Recommendations for upgrades

## Configuration (mingw.json)

```json
{
  "name": "MyProject",
  "version": "0.1.0",
  "toolchain": "UCRT64",
  "dependencies": ["fmt", "opencv"],
  "buildFlags": ["-Wall", "-Wextra", "-O2"],
  "includeCache": true,
  "staticLink": false,
  "optimizations": []
}
```

## Common Tasks

### Install a Library

```bash
# Manual
pacman -S mingw-w64-ucrt64-opencv

# Or use MingwSync
# Right-click error → Install via MSYS2
```

### Enable Compilation Caching

Set `includeCache: true` in `mingw.json` to speed up rebuilds.

### Build Portable Executable

1. Set `staticLink: true` in `mingw.json`
2. Click "Build Portable Executable" button
3. Get a single .exe with no DLL dependencies

## Troubleshooting

### MSYS2 not detected

- Install MSYS2 from https://www.msys2.org
- Add to PATH or set MSYSTEM_PREFIX environment variable

### Libraries not found

1. Ensure you have the correct MSYS2 environment activated
2. Run `pacman -Syu` to update package database
3. Install library: `pacman -S mingw-w64-ucrt64-<library>`

### Slow compilation

- Enable compilation cache: `includeCache: true`
- Use parallel build: MingwSync automatically detects CPU count
- Consider using `-O2` optimization flag
