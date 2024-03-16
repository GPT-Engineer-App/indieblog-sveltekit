import { Box, Button, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaPen, FaRss, FaGithub, FaTwitter } from "react-icons/fa";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";

const Index = () => {
  const posts = [
    {
      id: 1,
      title: "Embracing the IndieWeb",
      excerpt: "Discover the empowering principles of the IndieWeb and how it enables you to take control of your online presence.",
      date: "2023-05-20",
    },
    {
      id: 2,
      title: "Building a Personal Blog with React",
      excerpt: "Learn how to create a fast and interactive personal blog using React and Chakra UI.",
      date: "2023-05-18",
    },
    {
      id: 3,
      title: "The Importance of Owning Your Content",
      excerpt: "Explore the benefits of owning your content online and how it contributes to a more decentralized and resilient web.",
      date: "2023-05-15",
    },
  ];

  return (
    <Layout>
      <Box textAlign="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwc21pbGluZyUyMHBlcnNvbnxlbnwwfHx8fDE3MTA1ODY0NzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Author" borderRadius="full" boxSize="150px" mx="auto" />
        <Heading as="h1" size="2xl" mt={4}>
          John Doe
        </Heading>
        <Text fontSize="xl" color="gray.500">
          Web Developer | IndieWeb Enthusiast
        </Text>
      </Box>

      <Stack spacing={8}>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </Stack>

      <Box mt={12} textAlign="center">
        <Button leftIcon={<FaPen />} colorScheme="blue" mr={4}>
          New Post
        </Button>
        <Link href="/rss.xml" ml={4}>
          <FaRss />
        </Link>
        <Link href="https://github.com/johndoe" ml={4}>
          <FaGithub />
        </Link>
        <Link href="https://twitter.com/johndoe" ml={4}>
          <FaTwitter />
        </Link>
      </Box>
    </Layout>
  );
};

export default Index;
