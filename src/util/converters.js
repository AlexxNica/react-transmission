export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Remove file type chunk
      const [, encodedData = ''] = reader.result.split('base64,');

      resolve(encodedData);
    };
    reader.onabort = () => reject(reader.error);
    reader.onerror = () => reject(reader.error);

    reader.readAsDataURL(file);
  });
}
