import BlogPost from './BlogPost/BlogPost';
import styles from './BlogPosts.module.scss';
import { POSTS } from './constants';

const BlogPosts = ({ blogPosts }) => {
    return <section id="blog-posts" className={styles.section}>
        <ul className={styles.list}>
            {blogPosts.map((post, index) => <BlogPost {...post} key={`${post.sys.id}`}/>)}
        </ul>
    </section>
}

export default BlogPosts;