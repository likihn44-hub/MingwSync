import * as fs from 'fs';
import * as path from 'path';

export class CMakeGenerator {
    /**
     * Generate CMakeLists.txt from MSVC project structure
     */
    generateCMakeLists(projectName: string, sourceFiles: string[], includeDirs: string[], libs: string[]): string {
        const cmake = [
            'cmake_minimum_required(VERSION 3.15)',
            `project(${projectName} CXX)`,
            '',
            'set(CMAKE_CXX_STANDARD 17)',
            'set(CMAKE_CXX_STANDARD_REQUIRED ON)',
            '',
            `add_executable(${projectName}`,
        ];

        sourceFiles.forEach(file => {
            cmake.push(`  ${file}`);
        });
        cmake.push(')');
        cmake.push('');

        if (includeDirs.length > 0) {
            cmake.push(`target_include_directories(${projectName} PRIVATE`);
            includeDirs.forEach(dir => {
                cmake.push(`  ${dir}`);
            });
            cmake.push(')');
            cmake.push('');
        }

        if (libs.length > 0) {
            cmake.push(`target_link_libraries(${projectName} PRIVATE`);
            libs.forEach(lib => {
                cmake.push(`  ${lib}`);
            });
            cmake.push(')');
        }

        return cmake.join('\n');
    }

    saveCMakeLists(projectPath: string, content: string): void {
        const filePath = path.join(projectPath, 'CMakeLists.txt');
        fs.writeFileSync(filePath, content);
    }
}