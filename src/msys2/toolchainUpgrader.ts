import * as vscode from 'vscode';
import { execSync } from 'child_process';

export class ToolchainUpgrader {
    async upgradeToUCRT64(): Promise<void> {
        const selected = await vscode.window.showWarningMessage(
            'This will upgrade MinGW-w64 from MSVCRT to modern UCRT64 runtime.\nMake sure MSYS2 is running.',
            'Proceed',
            'Cancel'
        );

        if (selected !== 'Proceed') {
            return;
        }

        try {
            const command = 'pacman -S mingw-w64-ucrt64-toolchain';
            vscode.window.showInformationMessage(
                `Run in MSYS2: ${command}`,
                'Open MSYS2',
                'Manual'
            ).then(selection => {
                if (selection === 'Open MSYS2') {
                    this.openMSYS2Terminal();
                }
            });
        } catch (error) {
            vscode.window.showErrorMessage(`Upgrade failed: ${error}`);
        }
    }

    private openMSYS2Terminal(): void {
        // On Windows, open MSYS2 terminal
        try {
            execSync('start "" C:\\msys64\\msys2.exe', { stdio: 'ignore' });
        } catch (error) {
            vscode.window.showErrorMessage('Could not open MSYS2. Please open it manually.');
        }
    }

    async verifyUpgrade(): Promise<boolean> {
        try {
            const output = execSync('gcc --version', { encoding: 'utf-8' });
            return output.includes('UCRT') || output.includes('ucrt');
        } catch {
            return false;
        }
    }
}