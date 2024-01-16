"use client";
import { useState } from "react";
import {
  Text,
  Box,
  Image,
  Grid,
  Flex,
  FormControl,
  Button,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
  const toast = useToast();
  const [emailInput, setEmailInput] = useState("");
  const handleInputChange = (e: any) => setEmailInput(e.target.value);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async () => {
    try {
      const postData = { email: emailInput };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      const responseData = await response.json();
      const contactId = responseData.contactId;

      if (contactId) {
        // Show success alert
        toast({
          title: "Success",
          description: "You have been successfully added to our waiting list",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        // Show error alert
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);

      // Show loading alert while the promise is pending
      toast({
        title: "Promise pending",
        description: "Please wait",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      backgroundImage={"/images/hectrebg.png"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      minH={"100vh"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"full"}
        py={"1rem"}
        px={"1rem"}
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Box
            backgroundColor={"#fff"}
            width={"auto"}
            height={"50px"}
            display={"flex"}
            alignItems={"center"}
            rounded={"lg"}
          >
            <Image
              src="/images/hlb.svg"
              alt="logo"
              h={"160px"}
              w={"210px"}
              className="lazyload"
            />
          </Box>
        </motion.button>
        <Grid gap={10} mt={"7rem"} mb={"3rem"}>
          <Box>
            <Text
              color={"#fff"}
              fontSize={{ base: "3xl", lg: "6xl" }}
              fontFamily={"Poppins"}
              fontWeight={"600"}
              textAlign={"center"}
            >
              We're still building 👷‍♂️🚧
            </Text>
          </Box>
          <Box>
            <Text color={"#fff"} textAlign={"center"} fontSize={"xl"}>
              What are we building?
            </Text>
          </Box>
        </Grid>

        <Flex gap={5} flexDir={{ base: "column", xl: "row" }}>
          <Flex flexDir={"column"} gap={5}>
            <Flex
              rounded={"lg"}
              backgroundImage={{
                base: "/images/smcardbg1.png",
                lg: "/images/lgcardbg1.png",
              }}
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              width={{ base: "full", lg: "638px" }}
              height={{ base: "200px", lg: "387px" }}
              p={"2rem"}
              overflow={"hidden"}
              className="lazyload"
            >
              <Text color={"#fff"} fontSize={{ base: "2xl", lg: "4xl" }}>
                Find your next roommate on The Hectre
              </Text>
              {/* <Image src="/images/bgimg1.png" display={{base:"block", lg:"none"}}/> */}
            </Flex>
            <Flex
              backgroundColor={"#0F2235"}
              p={"1.5rem"}
              rounded={"xl"}
              flexDir={"column"}
              w={"auto"}
            >
              <Text color={"#E2E2E2"} fontSize={"2xl"} fontWeight={"100"}>
                Get updates on the development
              </Text>

              <FormControl mt={"1.2rem"}>
                <FormLabel color={"#fff"}>Enter your email address</FormLabel>
                <Input
                  autoComplete="on"
                  py={"1.6rem"}
                  rounded={"lg"}
                  type="email"
                  value={emailInput}
                  onChange={handleInputChange}
                  color={"#4D657D"}
                  placeholder="example@gmail.com"
                  border={" 1px solid #3D5369"}
                  background={"#26384A"}
                />
                <Button
                  type="submit"
                  backgroundColor={"#00BFFF"}
                  h={"50px"}
                  rounded={"lg"}
                  mt={"1rem"}
                  onClick={handleSubscribe}
                >
                  <Text color={"#fff"} fontSize={"md"} fontWeight={"400"}>
                    Join Waitlist
                  </Text>
                </Button>
              </FormControl>
            </Flex>
          </Flex>

          <Flex flexDir={"column"} gap={5}>
            <Flex>
              <Flex
                rounded={"lg"}
                backgroundImage={{
                  base: "/images/smcardbg2.png",
                  lg: "/images/lgcardbg2.png",
                }}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                width={{ base: "full", lg: "664px" }}
                height={{ base: "230px", lg: "318px" }}
                p={"2rem"}
                className="lazyload"
              >
                <Text color={"#fff"} fontSize={{ base: "2xl", lg: "4xl" }}>
                  Let's help you get your next apartment
                </Text>
              </Flex>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: 5, lg: 0 }}
            >
              <Flex
                rounded={"lg"}
                backgroundImage={"/images/lgcardbg3.png"}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                width={{ base: "full", lg: "322px" }}
                height={{ base: "200px", md: "318px" }}
                p={"2rem"}
                className="lazyload"
              >
                <Text
                  color={"#fff"}
                  fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
                  textAlign={"center"}
                >
                  Discover your next clients
                </Text>
              </Flex>

              <Flex
                rounded={"lg"}
                backgroundImage={{
                  base: "/images/cardbg4.png",
                  lg: "/images/lgcardbg4.png",
                }}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                width={{ base: "full", lg: "322px" }}
                height={{ base: "full", lg: "322px" }}
                p={"2rem"}
                justifyContent={"center"}
                className="lazyload"
              >
                <Image
                  src="/images/vlw.png"
                  w={{ base: "200px", md: "300px" }}
                  display={{ base: "bock", lg: "none" }}
                  className="lazyload"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent={"center"} pt={"5rem"} pb={"2rem"}>
        <Text color={"#fff"} textAlign={"center"}>
          © {currentYear} - The Hectre
        </Text>
      </Flex>
    </Box>
  );
}
