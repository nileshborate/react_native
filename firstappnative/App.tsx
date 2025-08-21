import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>React Native Basics</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        placeat veritatis iure non deserunt provident eveniet dignissimos
        voluptatibus? Temporibus commodi in ab, aut eum nesciunt rem vitae
        beatae! In laborum facere eum deserunt vero non esse explicabo commodi,
        nisi alias corrupti dolorem voluptates animi eius, eos quibusdam
        molestiae. Ipsam suscipit impedit libero iure quidem adipisci pariatur,
        id dolores asperiores, veniam quasi corporis perferendis itaque
        consequatur magni quisquam alias odio enim harum? Dolorem explicabo
        illum velit? Atque harum commodi eaque eos ducimus exercitationem id
        obcaecati sed esse non ab neque asperiores dolorem nihil iste libero
        odio animi, magni quod, impedit, minima consequuntur. Neque laudantium
        possimus mollitia ex cupiditate odit aliquam, perspiciatis commodi
        delectus et quibusdam officiis, ut quia vel fugiat aliquid non! Ad
        distinctio nemo facilis deleniti porro natus magni maxime praesentium,
        cupiditate sed nobis, incidunt eius quaerat, odit earum. Veniam
        quibusdam quos dolores dolor doloremque minus alias, sapiente aut iste
        voluptate nostrum ullam inventore voluptas. Earum aliquid soluta
        officiis cupiditate mollitia ipsam ad consectetur, pariatur deleniti
        quam eum nobis dicta quidem vero placeat excepturi aut architecto
        delectus natus quae molestias nesciunt deserunt debitis tenetur. Tempora
        quasi ipsum, veritatis ab earum odit maiores nesciunt illo. Tempore
        corrupti quo odio blanditiis harum? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatum, quasi quis soluta quibusdam
        distinctio a commodi ut maxime eum in cumque cum ex, deserunt eligendi,
        necessitatibus harum nam architecto? Adipisci debitis qui, dolorum,
        suscipit voluptatem eveniet, odit quod at quia error quaerat vero
        nostrum doloribus nemo voluptatum inventore officiis nesciunt laudantium
        accusamus ab ducimus beatae optio consequuntur porro. Sunt magnam
        accusantium sequi repudiandae, cupiditate ut impedit exercitationem in
        nostrum ab dolor rerum, dolorem laboriosam consequuntur dicta. Atque
        incidunt quod, repellendus quae quo sequi ut, cupiditate nesciunt velit
        illum facere eveniet perspiciatis dolorum provident veniam at rem nulla
        accusantium magnam sint.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 18 },
  h1: { fontSize: 28, fontWeight: '800', marginBottom: 8 },
  logo: { width: 64, height: 64, marginVertical: 12 },
  p: { fontSize: 16, lineHeight: 22, color: '#333' },
});
export default App;
