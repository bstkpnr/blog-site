import React, { FC, useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";

import "./App.css";
import Resume from "./pages/Resume/Resume";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/Blog/Blog";

interface ProfileData {
  profileUrl: string;
  profileImage: string;
}

interface BlogData {
  item: any[];
  isLoading: boolean;
}

const App: FC = () => {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bstkpnr";

  const [profileData, setProfileData] = useState<ProfileData>({
    profileUrl: "",
    profileImage: "",
  });

  const [blogData, setBlogData] = useState<BlogData>({
    item: [],
    isLoading: true,
  });

  useEffect(() => {
    axios
      .get(mediumURL)
      .then((info) => {
        const image = info.data.feed.image;
        const link = info.data.feed.link;
        const blogs = info.data.items;
        const posts = blogs.filter((post: any) => post.categories.length > 0);

        setProfileData({
          profileUrl: link,
          profileImage: image,
        });

        setBlogData({
          item: posts,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        setBlogData((prev) => ({ ...prev, isLoading: false }));
      });
  }, []);

  return (
    <Router>
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route
            path="/blog"
            element={<BlogPage blog={blogData} profile={profileData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
