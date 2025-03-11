import { Box, Container, Typography } from "@mui/material";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How a Slow Website Can Cost You Customers - Brian Nguyen Blog",
  description:
    "A slow website frustrates visitors, lowers search rankings, and reduces conversions. Learn how speed impacts your business and how to fix it.",
  openGraph: {
    url: "https://briancode.dev/blog/how-a-slow-website-can-cost-you-customers",
    title: "How a Slow Website Can Cost You Customers - Brian Nguyen Blog",
    description:
      "A slow website frustrates visitors, lowers search rankings, and reduces conversions. Learn how speed impacts your business and how to fix it.",
    images: "https://briancode.dev/images/blogs/losscustomer.png",
  },
};

const Blog = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ color: "text.secondary", lineHeight: 2, bgcolor: "white", pb: 6 }}
    >
      <Box
        sx={{
          display: "flex",
          ml: -3,
          mr: -3,
          height: 400,
          bgcolor: "#7f4ed555",
          color: "#7f4ed5",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          mt: 7,
          mb: 4,
          WebkitAlignItems: "center",
        }}
      >
        <Typography variant="h3">
          How a Slow Website Can Cost You Customers
        </Typography>
      </Box>
      <Image
        src="/images/blogs/losscustomer.png"
        width={1000}
        height={1000}
        style={{ width: "100%", height: "auto" }}
        alt="How a Slow Website Can Cost You Customers"
        loading="lazy"
      />

      <Typography variant="body1" sx={{ pt: 2, mt: 1 }}>
        A potential customer visits your website, excited to learn more about
        your services. They click the link, but instead of seeing your
        beautifully designed homepage, they’re met with a blank screen and a
        loading spinner. After a few seconds, frustration sets in, and they
        leave. Just like that, you’ve lost a customer before they even saw what
        you offer.
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 5 }}
        fontWeight="bold"
        color="text.primary"
      >
        First Impressions Matter
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Your website is often the first interaction a customer has with your
        business. In today’s fast-paced world, people expect instant access to
        information. If your website takes too long to load, visitors assume
        your business is outdated, unreliable, or even untrustworthy. They may
        never return, opting instead for a competitor whose site loads
        instantly.
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 5 }}
        fontWeight="bold"
        color="text.primary"
      >
        Slow Websites Hurt SEO and Visibility
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Search engines like Google prioritize fast-loading websites. If your
        site is slow, it will rank lower in search results, making it harder for
        potential customers to find you. Even if you have the best services or
        products, a slow website means fewer visitors, which translates to fewer
        opportunities to convert leads into customers.
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 5 }}
        fontWeight="bold"
        color="text.primary"
      >
        High Bounce Rates and Lost Revenue
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        When a website takes more than a few seconds to load, visitors tend to
        leave. Studies show that a one-second delay in page load time can result
        in a significant drop in conversions. This means fewer sign-ups, fewer
        purchases, and ultimately, lower revenue. In e-commerce, this can be the
        difference between a thriving business and one that struggles to stay
        afloat.
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 5 }}
        fontWeight="bold"
        color="text.primary"
      >
        Mobile Users Expect Speed
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        With more people browsing on mobile devices, website speed is more
        important than ever. Mobile users often have slower internet connections
        compared to desktops, so if your site isn’t optimized for speed, you
        risk losing a large portion of your audience. A slow mobile experience
        can drive users away before they even engage with your content.
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 5 }}
        fontWeight="bold"
        color="text.primary"
      >
        Speed Reflects Professionalism
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        A fast website gives the impression that your business is well-run and
        professional. On the other hand, a slow website can make your business
        seem unprepared or careless. If you want to build credibility and trust
        with your audience, ensuring a smooth, fast-loading website is a must.
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 5 }}
        fontWeight="bold"
        color="text.primary"
      >
        Don’t Let Speed Cost You Customers
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        The good news is that website speed can be improved. Optimizing images,
        leveraging caching, and using a reliable hosting service are just a few
        ways to boost performance. A faster website not only enhances user
        experience but also increases conversions, customer retention, and
        ultimately, revenue.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        If your website is slow, now is the time to take action. Your customers
        won’t wait—so why should your website?
      </Typography>
    </Container>
  );
};

export default Blog;
