import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import AdminAuth from '../../../components/AdminAuth';
import WorldInfoEditor from '../../../components/WorldInfoEditor';
import { worldInfoService } from '../../../firebase';

export default function AdminEditWorldInfo() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!categoryId) return;
    
    // If this is a new category, don't fetch
    if (categoryId === 'new') {
      setCategory({
        title: '',
        content: '',
        order: 0
      });
      setLoading(false);
      return;
    }

    const fetchCategory = async () => {
      try {
        setLoading(true);
        const fetchedCategory = await worldInfoService.getWorldInfoCategory(categoryId);
        
        if (fetchedCategory) {
          setCategory(fetchedCategory);
        } else {
          setError('World info category not found.');
        }
      } catch (error) {
        console.error('Error fetching world info category:', error);
        setError('Failed to load world info category. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  if (!categoryId) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={`Admin - ${categoryId === 'new' ? 'New World Info' : `Edit ${category?.title || categoryId}`}`}>
      <AdminAuth>
        <div className="admin-header">
          <h2>{categoryId === 'new' ? 'Add New World Info' : `Edit World Info: ${category?.title || categoryId}`}</h2>
          <div className="admin-actions">
            <button 
              onClick={() => router.push('/admin/world-info')}
              className="btn btn-secondary"
            >
              Back to World Info
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center">Loading world info category...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <WorldInfoEditor categoryId={categoryId} initialData={category} />
        )}
      </AdminAuth>
    </Layout>
  );
}
