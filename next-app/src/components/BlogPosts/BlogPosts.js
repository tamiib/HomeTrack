import BlogPost from './BlogPost/BlogPost';
import styles from './BlogPosts.module.scss';
import { POSTS } from './constants';

const BlogPosts = () => {
    return <section id="blog-posts" className={styles.section}>
        <ul className={styles.list}>
            {POSTS.map((post, index) => <BlogPost {...post} key={`blog-${index}`}/>)}
        </ul>
    </section>
}

export default BlogPosts;