'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface VideoData {
  id: string;
  title: string;
  description: string;
  category: string;
  visibility: 'private' | 'unlisted' | 'public';
  allowComments: boolean;
  thumbnail: string;
}

export default function EditVideo({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<VideoData>({
    id: '',
    title: '',
    description: '',
    category: '',
    visibility: 'private',
    allowComments: true,
    thumbnail: ''
  });

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    // Fetch video data
    fetchVideoData();
  }, [id, router]);

  const fetchVideoData = async () => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/videos/${id}`);
      // const data = await response.json();
      // setFormData(data);

      // Mock data based on the ID
      setTimeout(() => {
        let mockData: VideoData;

        if (id === '1') {
          mockData = {
            id: '1',
            title: 'Introduction to Physics',
            description: 'A beginner-friendly introduction to basic physics concepts.',
            category: 'science',
            visibility: 'public',
            allowComments: true,
            thumbnail: 'https://via.placeholder.com/300x169'
          };
        } else if (id === '2') {
          mockData = {
            id: '2',
            title: 'Advanced Mathematics Concepts',
            description: 'Exploring complex mathematical theories for high school students.',
            category: 'mathematics',
            visibility: 'private',
            allowComments: false,
            thumbnail: 'https://via.placeholder.com/300x169'
          };
        } else if (id === '3') {
          mockData = {
            id: '3',
            title: 'How to Write an Essay',
            description: 'Step-by-step guide to writing effective essays for academic success.',
            category: 'language',
            visibility: 'unlisted',
            allowComments: true,
            thumbnail: 'https://via.placeholder.com/300x169'
          };
        } else {
          // Default mock data
          mockData = {
            id,
            title: 'Sample Video',
            description: 'This is a sample video description.',
            category: 'other',
            visibility: 'private',
            allowComments: true,
            thumbnail: 'https://via.placeholder.com/300x169'
          };
        }

        setFormData(mockData);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error fetching video data:', error);
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would be an API call
      // const response = await fetch(`/api/videos/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // if (!response.ok) throw new Error('Failed to update video');
      
      // Redirect to dashboard after successful update
      router.push('/dashboard');
    } catch (error) {
      console.error('Error updating video:', error);
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All changes will be lost.')) {
      router.push('/dashboard');
    }
  };

  if (isLoading) {
    return (
      <main>
        <section className="page-header">
          <div className="container">
            <h1>Edit Video</h1>
            <p>Loading video data...</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Edit Video</h1>
          <p>Make changes to your educational video</p>
        </div>
      </section>

      <section className="edit-video-content">
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
                <div className="video-preview-section">
                  <label>Video Preview</label>
                  <div className="video-thumbnail">
                    <img src={formData.thumbnail} alt={formData.title} />
                  </div>
                  <div className="mt-4">
                    <button type="button" className="btn btn-secondary btn-small">
                      Change Thumbnail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={handleCancel}
                disabled={isSaving}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
} 