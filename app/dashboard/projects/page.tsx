'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProjectsPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [projectUrl, setProjectUrl] = useState('');
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
      // 1. Upload the image to your storage (e.g., Cloudinary, AWS S3)
      // 2. Save the project URL and image URL to your database
      
      // For now, we'll just show a success message
      alert('Project added successfully!');
      
      // Clear form
      setImageFile(null);
      setProjectUrl('');
      setPreviewUrl(null);
    } catch (error) {
      alert('Error adding project');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>
      
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Project Image
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
                alt="Preview" 
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Project URL
          </label>
          <input
            type="url"
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="https://example.com"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Adding Project...' : 'Add Project'}
        </button>
      </form>

      {/* Project List */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Existing Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* You would map through your projects here */}
          {/* This is a placeholder for demonstration */}
          <div className="border rounded-lg p-4">
            <p className="text-gray-500">No projects added yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 