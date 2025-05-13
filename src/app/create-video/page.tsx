'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateVideo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    visibility: 'private',
    allowComments: true
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setVideoFile(file);
      
      // Create a preview URL (this would be for thumbnails in a real app)
      // For video, this creates a blob URL that could be used to display video
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoFile) {
      alert('Please select a video file to upload');
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Simulate file upload with progress
      await simulateFileUpload();
      
      // In a real app, this would be a form submission with the file
      // const formDataToSend = new FormData();
      // formDataToSend.append('videoFile', videoFile);
      // Object.keys(formData).forEach(key => {
      //   formDataToSend.append(key, formData[key as keyof typeof formData].toString());
      // });
      
      // const response = await fetch('/api/videos', {
      //   method: 'POST',
      //   body: formDataToSend
      // });
      
      // if (!response.ok) throw new Error('Failed to upload video');
      
      // Redirect to dashboard after successful upload
      router.push('/dashboard');
    } catch (error) {
      console.error('Error uploading video:', error);
      setIsUploading(false);
    }
  };

  // Simulate a file upload with progress tracking
  const simulateFileUpload = async () => {
    return new Promise<void>((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setUploadProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          resolve();
        }
      }, 300);
    });
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All changes will be lost.')) {
      router.push('/dashboard');
    }
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Create New Video</h1>
          <p>Upload and configure your educational video</p>
        </div>
      </section>

      <section className="create-video-content">
        <div className="container">
          <form onSubmit={handleSubmit} className="video-form">
            <div className="form-columns">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="title">Video Title</label>
                  <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter a descriptive title"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea 
                    id="description" 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe what your video is about"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select 
                    id="category" 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="language">Language Arts</option>
                    <option value="history">History</option>
                    <option value="arts">Arts</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group radio-group">
                  <label>Visibility</label>
                  <div className="radio-options">
                    <div className="radio-option">
                      <input 
                        type="radio" 
                        id="visibility-private" 
                        name="visibility"
                        value="private"
                        checked={formData.visibility === 'private'}
                        onChange={handleChange}
                      />
                      <label htmlFor="visibility-private">Private</label>
                    </div>
                    <div className="radio-option">
                      <input 
                        type="radio" 
                        id="visibility-unlisted" 
                        name="visibility"
                        value="unlisted"
                        checked={formData.visibility === 'unlisted'}
                        onChange={handleChange}
                      />
                      <label htmlFor="visibility-unlisted">Unlisted</label>
                    </div>
                    <div className="radio-option">
                      <input 
                        type="radio" 
                        id="visibility-public" 
                        name="visibility"
                        value="public"
                        checked={formData.visibility === 'public'}
                        onChange={handleChange}
                      />
                      <label htmlFor="visibility-public">Public</label>
                    </div>
                  </div>
                </div>
                
                <div className="form-group checkbox">
                  <input 
                    type="checkbox" 
                    id="allowComments" 
                    name="allowComments"
                    checked={formData.allowComments}
                    onChange={handleChange}
                  />
                  <label htmlFor="allowComments">Allow comments</label>
                </div>
              </div>
              
              <div className="form-column">
                <div className="video-upload-area">
                  <label>Upload Video</label>
                  
                  {previewUrl ? (
                    <div className="video-preview">
                      <video controls src={previewUrl} />
                      <button 
                        type="button" 
                        className="btn btn-small btn-danger"
                        onClick={() => {
                          setVideoFile(null);
                          setPreviewUrl('');
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="upload-box">
                      <input 
                        type="file" 
                        id="videoFile" 
                        name="videoFile"
                        accept="video/*"
                        onChange={handleFileChange}
                        required
                      />
                      <label htmlFor="videoFile" className="upload-label">
                        <span className="upload-icon">+</span>
                        <span>Select video file</span>
                        <small>MP4, MOV, or WebM format. Max 500MB.</small>
                      </label>
                    </div>
                  )}
                  
                  {isUploading && (
                    <div className="upload-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">Uploading: {uploadProgress}%</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={handleCancel}
                disabled={isUploading}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isUploading || !videoFile}
              >
                {isUploading ? 'Uploading...' : 'Create Video'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
} 