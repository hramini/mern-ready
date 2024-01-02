import semver from 'semver';

export function versionMiddleware(version: string): any {
  return (request: any, response: any, next: any): void => {
    let checkedVersion = '1.0.0';
    const headerVersion: string | string[] | undefined =
      request.headers['x-version'];

    if (headerVersion) {
      if (typeof headerVersion === 'object') {
        checkedVersion = headerVersion[0];
      }

      if (typeof headerVersion === 'string') {
        checkedVersion = headerVersion;
      }
    }

    if (semver.gte(checkedVersion, version)) {
      next();

      return;
    }

    next('route');
  };
}
