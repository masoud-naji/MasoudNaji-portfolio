import React from "react";
import HomePage from "../../pages/index"


export default {
    title: "WebSite_Pages/Home",
    component: HomePage,
};


const Template = (args) => <HomePage {...args} />;

export const Home = Template.bind({});
