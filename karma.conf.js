module.exports = function (config) {
    config.set({
        frameworks: [
            "jasmine",
            "karma-typescript"
        ],
        files: [
            "src/**/*.ts"
        ],

        preprocessors: {
            "**/*.ts": "karma-typescript"
        },
        reporters: ["dots", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        singleRun: config.singleRun,
        tsconfig: "./tsconfig.spec.json",
        karmaTypescriptConfig: {
            coverageReporter: {
                instrumenterOptions: {
                    istanbul: {noCompact: true}
                },

            },
            reports: {
                "html": {
                    "directory": "coverage",
                    "subdirectory": "src"
                },
                "lcovonly": {
                    "directory": "coverage",
                    "subdirectory": "src"
                },
                "text-summary": ""
            },
            coverageOptions: {
                instrumentation: true,
                dir: 'XX/coverage',
                threshold: {
                    global: {
                        statements: 100,
                        branches: 100,
                        functions: -10,
                        lines: 100,
                        excludes: [
                            "src/foo/**/*.js"
                        ]
                    },
                    file: {
                        statements: -10,
                        branches: 100,
                        functions: 100,
                        lines: 100,
                        excludes: [
                            "src/bar/**/*.js"
                        ],
                        overrides: {
                            "src/file.js": {
                                statements: 90
                            }
                        }
                    }
                }
            }
        }

    });
};
