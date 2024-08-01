const CourseDetails = () => {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState("About"); // State to track current tab

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const renderContent = () => {
    if (currentTab === "About") {
      return <AboutScreen />;
    } else if (currentTab === "Lessons") {
      return <LessonsScreen />;
    } else if (currentTab === "Reviews") {
      return <ReviewsScreen />;
    }
  };

  return (
    <SafeAreaView>
      <View className="bg-white h-screen">
        <CourseHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <View className="flex-1">{renderContent()}</View>
      </View>
    </SafeAreaView>
  );
};
