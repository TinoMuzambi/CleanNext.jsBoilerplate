import { PostProps } from "../interfaces";

const Post: React.FC<PostProps> = ({ title }) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

export default Post;
