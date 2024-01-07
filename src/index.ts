export const launcher = (action: () => void): () => void => {
  let _flag = false;
  return () => void (!_flag && (_flag = true) && action());
};
