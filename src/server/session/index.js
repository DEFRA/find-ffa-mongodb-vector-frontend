function set(request, entryKey, key, value) {
  const entryValue = request.yar?.get(entryKey) || {}

  if (!entryValue[key]) {
    entryValue[key] = []
  }

  if (Array.isArray(entryValue[key])) {
    entryValue[key].push(typeof value === 'string' ? value.trim() : value)
  } else {
    entryValue[key] = [
      entryValue[key],
      typeof value === 'string' ? value.trim() : value
    ]
  }

  request.yar.set(entryKey, entryValue)
}

function get(request, entryKey, key) {
  return key ? request.yar?.get(entryKey)?.[key] : request.yar?.get(entryKey)
}

export { set, get }
