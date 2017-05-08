module.exports = {
  TOPIC_PREFIX: "wfm",
  FILES_ENTITY_NAME: "files",
  TOPIC_SEPARATOR: ":",
  ERROR_PREFIX: "error",
  DONE_PREFIX: "done",
  TOPIC_TIMEOUT: 4000,
  TOPICS: {
    CREATE: "create",
    LIST: "list"
  },
  STORAGE_TOPICS: {
    CREATE: "create",
    GET: "get"
  },
  AWS_BUCKET_PERMISSIONS: 'authenticated-read'
};