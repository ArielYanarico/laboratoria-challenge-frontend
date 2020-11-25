import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import { requestPost } from '../actions/post';

const usePosts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector(state => state);
  const session = Cookies.get('session');

  useEffect(() => {
    if (!posts.length && !isLoading && session)
      dispatch(requestPost(`/posts/${session}`));
  }, [posts, isLoading, dispatch, session]);

  return posts;
};

export default usePosts;
