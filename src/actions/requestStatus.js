export const HAS_ERRORED = 'HAS_ERRORED';
export const IS_LOADING = 'IS_LOADING';

export function hasErrored(hasErrored) {
  return {
    type: HAS_ERRORED,
    hasErrored
  };
}

export function isLoading(isLoading) {
  return {
    type: IS_LOADING,
    isLoading
  };
}