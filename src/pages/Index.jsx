import { Box, Button, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaPen, FaRss, FaGithub, FaTwitter } from "react-icons/fa";

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
      title: "Building a Personal Blog with SvelteKit",
      excerpt: "Learn how to create a fast and interactive personal blog using SvelteKit, a powerful web development framework.",
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
    <Box maxW="800px" mx="auto" px={4} py={8}>
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
          <Box key={post.id} p={6} borderWidth={1} rounded="md" _hover={{ shadow: "md" }}>
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
    </Box>
  );
};

export default Index;
