import { PostType } from '../../types/api';
import './EditButton.css';

export default function EditPostButton({
  post,
  setActive,
}: {
  post: PostType;
  setActive: React.Dispatch<React.SetStateAction<PostType | null>>;
}) {
  return (
    <button className="edit-btn" onClick={() => setActive(post)}>
      edit
    </button>
  );
}
