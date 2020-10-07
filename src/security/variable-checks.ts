export function checkEnvironmentVariables() {
  console.log("Checking environment variables");
  console.log("starting with profile ", process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'development') {
    if (process.env.JWT_SECRET === undefined) {
      console.error("JWT_SECRET has to be given");
      process.exit(1);
    }
    if (process.env.MONGOOSE_URL === undefined) {
      console.error("MONGOOSE_URL has to be given");
      process.exit(1);
    }

  }
  else {
    if (process.env.JWT_SECRET === undefined) {
      console.warn("JWT_SECRET has it's default value");
    }

    if (process.env.MONGOOSE_URL === undefined) {
      console.warn("MONGOOSE_URL has it's default value");
    }
  }
}
