import { Box, Heading, Text, Link } from "@chakra-ui/react";

const BlogPost = ({ post }) => {
  return (
    <Box mb={8}>
      <Heading as="h2" size="xl">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </Heading>
      <Text mt={2} color="gray.600">
        {post.date}
      </Text>
      <Text mt={4}>{post.excerpt}</Text>
      <Link href={`/posts/${post.id}`} mt={4} display="inline-block">
        Read more &rarr;
      </Link>
    </Box>
  );
};

export default BlogPost;
