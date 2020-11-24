import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestPost } from '../actions/post';

const usePosts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector(state => state);

  useEffect(() => {
    if (!posts.length && !isLoading)
      dispatch(requestPost('/posts'));
  }, [posts, isLoading, dispatch]);

  return posts;
};

export default usePosts;
