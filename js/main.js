const checkCommentLength = (comment, maxLength) => {
  if (comment.length < maxLength) {
    return true;
  }

  return false;
};

checkCommentLength();
