const API_URL = 'http://localhost:5000';

export const apiTable = {
  async compareDocuments(file1, file2) {
    try {
      const formData = new FormData();
      formData.append('file1', file1);
      formData.append('file2', file2);

      const response = await fetch(`${API_URL}/data`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to compare documents');
      }

      return await response.json();
    } catch (error) {
      console.error('Error comparing documents:', error);
      throw error;
    }
  },
};
