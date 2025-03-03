'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CertificatesPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [certificateName, setCertificateName] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would typically:
      // 1. Upload the certificate image to your storage
      // 2. Save the certificate data to your database
      
      alert('Certificate added successfully!');
      
      // Clear form
      setImageFile(null);
      setCertificateName('');
      setPreviewUrl(null);
    } catch (error) {
      alert('Error adding certificate');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Add New Certificate</h2>
      
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Certificate Name
          </label>
          <input
            type="text"
            value={certificateName}
            onChange={(e) => setCertificateName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="e.g., AWS Solutions Architect"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Certificate Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          {previewUrl && (
            <div className="mt-4">
              <img 
                src={previewUrl} 
                alt="Certificate Preview" 
                className="w-full max-w-lg rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Adding Certificate...' : 'Add Certificate'}
        </button>
      </form>

      {/* Certificates List */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Existing Certificates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* You would map through your certificates here */}
          {/* This is a placeholder for demonstration */}
          <div className="border rounded-lg p-4">
            <p className="text-gray-500">No certificates added yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage; 