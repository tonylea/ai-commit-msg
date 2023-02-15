export function normaliseCommitDescription(description: String): String {
  const regex = /\.$/i;
  const normalisedDescription = description.toLowerCase().replace(regex, "");
  return normalisedDescription;
}
