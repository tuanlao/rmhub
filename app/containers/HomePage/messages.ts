/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  ok: {
    id: `${scope}.ok`,
    defaultMessage: 'OK',
  },
  upload: {
    id: `${scope}.upload`,
    defaultMessage: 'Upload file',
  },
  byUrl: {
    id: `${scope}.byUrl`,
    defaultMessage: 'By url',
  },
  url: {
    id: `${scope}.url`,
    defaultMessage: 'url',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Data or url error',
  },
});
