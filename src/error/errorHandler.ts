import * as vscode from 'vscode';

export class ErrorHandler {
    static handleToolchainError(error: Error): void {
        console.error('Toolchain error:', error);
        vscode.window.showErrorMessage(
            `Toolchain error: ${error.message}`,
            'View Details'
        ).then(selection => {
            if (selection === 'View Details') {
                vscode.commands.executeCommand('workbench.action.toggleDevTools');
            }
        });
    }

    static handlePackageError(error: Error): void {
        console.error('Package manager error:', error);
        vscode.window.showErrorMessage(
            `Package error: ${error.message}. Check MSYS2 is running.`
        );
    }

    static handleCompilationError(error: Error): void {
        console.error('Compilation error:', error);
        vscode.window.showErrorMessage(
            `Compilation failed: ${error.message}`
        );
    }

    static handleConfigurationError(error: Error): void {
        console.error('Configuration error:', error);
        vscode.window.showErrorMessage(
            `Configuration error: ${error.message}. Reconfigure project.`,
            'Reconfigure'
        ).then(selection => {
            if (selection === 'Reconfigure') {
                vscode.commands.executeCommand('mingwsync.configureProject');
            }
        });
    }

    static handleFatalError(error: Error): void {
        console.error('Fatal error:', error);
        vscode.window.showErrorMessage(
            `Fatal error: ${error.message}. Extension may need to be reloaded.`,
            'Reload Window'
        ).then(selection => {
            if (selection === 'Reload Window') {
                vscode.commands.executeCommand('workbench.action.reloadWindow');
            }
        });
    }
}