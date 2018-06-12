import { setupAppForTesting } from '@bigtest/react';
import Application from '../../src/ui/application';

export { visit, location } from '@bigtest/react';

export function setupApplicationForTesting() {
  beforeEach(async function() {
    this.app = await setupAppForTesting(Application);
  });
}
