'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  views: number;
  createdAt: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    // Fetch user's videos
    fetchVideos();
  }, [router]);

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/videos');
      // const data = await response.json();
      // setVideos(data.videos);

      // Mock data
      setTimeout(() => {
        setVideos([
          {
            id: '1',
            title: 'Introduction to Physics',
            duration: '5:24',
            thumbnail: 'https://via.placeholder.com/300x169',
            views: 128,
            createdAt: '2023-10-15'
          },
          {
            id: '2',
            title: 'Advanced Mathematics Concepts',
            duration: '12:08',
            thumbnail: 'https://via.placeholder.com/300x169',
            views: 87,
            createdAt: '2023-11-02'
          },
          {
            id: '3',
            title: 'How to Write an Essay',
            duration: '8:45',
            thumbnail: 'https://via.placeholder.com/300x169',
            views: 215,
            createdAt: '2023-12-10'
          }
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setIsLoading(false);
    }
  };

  const handleCreateVideo = () => {
    router.push('/create-video');
  };

  const handleEditVideo = (videoId: string) => {
    router.push(`/edit-video/${videoId}`);
  };

  const handleDeleteVideo = async (videoId: string) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        // In a real app, this would be an API call
        // await fetch(`/api/videos/${videoId}`, {
        //   method: 'DELETE'
        // });
        
        // Remove video from state
        setVideos(videos.filter(video => video.id !== videoId));
      } catch (error) {
        console.error('Error deleting video:', error);
      }
    }
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>My Dashboard</h1>
          <p>Manage your educational videos and analytics</p>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="container">
          <div className="dashboard-actions">
            <button 
              className="btn btn-primary" 
              onClick={handleCreateVideo}
            >
              Create New Video
            </button>
          </div>

          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Total Videos</h3>
              <p className="stat-value">{videos.length}</p>
            </div>
            <div className="stat-card">
              <h3>Total Views</h3>
              <p className="stat-value">{videos.reduce((sum, video) => sum + video.views, 0)}</p>
            </div>
            <div className="stat-card">
              <h3>Storage Used</h3>
              <p className="stat-value">268 MB</p>
            </div>
          </div>

          <div className="videos-section">
            <h2>My Videos</h2>
            
            {isLoading ? (
              <p>Loading your videos...</p>
            ) : videos.length === 0 ? (
              <div className="empty-state">
                <p>You haven't created any videos yet.</p>
                <button 
                  className="btn btn-secondary" 
                  onClick={handleCreateVideo}
                >
                  Create Your First Video
                </button>
              </div>
            ) : (
              <div className="videos-grid">
                {videos.map(video => (
                  <div className="video-card" key={video.id}>
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <span className="video-duration">{video.duration}</span>
                    </div>
                    <div className="video-info">
                      <h3>{video.title}</h3>
                      <div className="video-meta">
                        <span>{video.views} views</span>
                        <span>Created: {video.createdAt}</span>
                      </div>
                    </div>
                    <div className="video-actions">
                      <button 
                        className="btn btn-small" 
                        onClick={() => handleEditVideo(video.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-small btn-danger" 
                        onClick={() => handleDeleteVideo(video.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 