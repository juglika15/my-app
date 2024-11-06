import Spinner from './spinner/spinner';

export default function Loading() {
  return (
    <div className="main">
      <span>Loading...</span>
      <Spinner />
    </div>
  );
}
