// Add more MIME types as we need them:
export const mimeTypeToFileExtension = {
  'audio/*': 'audio files',
  'audio/mpeg': '.mpeg',
  'audio/wav': '.wav',
  'image/*': 'image files',
  'image/gif': '.gif',
  'image/heic': '.heic',
  'image/jpeg': '.jpg, .jpeg',
  'image/png': '.png',
  'image/svg+xml': '.svg+xml',
  'image/tiff': '.tiff',
  'image/webp': '.webp',
  'text/*': 'text files',
  'text/csv': '.csv',
  'text/plain': '.plain',
  'text/rtf': '.rtf',
  'video/*': 'video files',
  'video/mp4': '.mp4',
  'video/mpeg': '.mpeg',
  'application/msword': '.msword',
  'application/pdf': '.pdf',
  'application/rtf': '.rtf',
  'application/vnd.ms-excel': '.xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    '.docx',
  'application/zip': '.zip',
} as const;

export type AcceptedType = keyof typeof mimeTypeToFileExtension;
