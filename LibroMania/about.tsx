import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

type Product = {
  name: string;
  price: string;
  image: any; 
};

const menuItems = ['Mystery', 'Scientific', 'Horror', 'Thriller', 'Comedy', 'Romance'];

const bookImages = {
  p1: require('../assets/p1.jpg'),
  p2: require('../assets/p2.jpg'),
  p3: require('../assets/p3.jpg'),
  p4: require('../assets/p4.jpg'),
  p5: require('../assets/p5.jpg'),
};

const products: Product[] = [
  { name: "Five Survive", price: 'AED 45', image: bookImages.p1 },
  { name: "A Good Girl's Guide To Murder", price: 'AED 50', image: bookImages.p2 },
  { name: 'Good Girl, Bad Blood', price: 'AED 45', image: bookImages.p3 },
  { name: 'Kill Joy', price: 'AED 20', image: bookImages.p4 },
  { name: 'A Murder Is Announced', price: 'AED 30', image: bookImages.p5 },
];

const Index = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.sidebar}>
        <FontAwesome name="bars" size={20} style={styles.menuIcon} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {menuItems.map((value, index) => (
            <TouchableOpacity key={index} style={styles.menuBtnTextWrapper}>
              <Text style={styles.menuBtnText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Main Content */}
      <View style={styles.subContainer}>
        <View style={styles.shopIconContainer}>
          <FontAwesome name="shopping-bag" size={20} style={styles.menuIcon} />
        </View>

        <Text style={styles.title}>LibroMania</Text>
        <Text style={styles.subTitle}>Reading is life</Text>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="search..."
            placeholderTextColor="white"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            style={{ flex: 1 }}
          />
          <FontAwesome name="search" size={20} style={{ color: 'white' }} />
        </View>

        {/* Products */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.productsContainer}>
          {filteredProducts.map((product, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => router.push('/description')}
            >
              <ImageBackground
                source={require('../assets/bdoodle.jpg')}
                style={[idx === 1 ? styles.productContainer2 : styles.productContainer, { width: '100%' }]}
                imageStyle={{ opacity: 0.1, borderRadius: 20, overflow: 'hidden'}}
                resizeMode="cover"
              >
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.priceTitle}>Price</Text>
                <Text style={styles.priceText}>{product.price}</Text>
                <Text style={styles.productName}>{product.name}</Text>

                <View style={styles.productBottom}>
                  <View>
                    <Text style={styles.reviewText}>G5 Review</Text>
                    <View style={styles.reviewStarContainer}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FontAwesome
                          key={i}
                          name="star"
                          size={10}
                          color="white"
                          style={{ marginRight: 5 }}
                        />
                      ))}
                    </View>
                  </View>
                  <TouchableOpacity style={styles.addBtn}>
                    <Text>+ Add</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor : '#F6728D',
  },
  subContainer: {
    flex: 5,
    marginHorizontal: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 55,
    fontFamily: 'Shoulder',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Shoulder',
    color: 'white',
  },
  searchContainer: {
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shopIconContainer: {
    alignItems: 'flex-end',
  },
  sidebar: {
    backgroundColor: 'aqua',
    alignItems: 'center',
    paddingVertical: 30,
  },
  menuIcon: {
    marginBottom: 15,
  },
  menuBtnTextWrapper: {
    height: 120,
    transform: [{ rotate: '-90deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBtnText: {
    fontSize: 20,
    fontFamily: 'Shoulder',
  },
  productsContainer: {
    marginVertical: 10,
  },
  productContainer: {
    backgroundColor: '#FDEB71',
    padding: 20,
    borderRadius: 20,
    marginTop: 70,
    //overflow: 'hidden', 
  },
  productContainer2: {
    backgroundColor: '#FDEB71',
    padding: 20,
    borderRadius: 20,
    marginTop: 70, 
  },
  productImage: {
    height: 170, 
    width: 120, 
    position: 'absolute',
    top: -30,    
    left: 300,    
  },
  priceTitle: {
    fontFamily: 'Shoulder',
    fontSize: 20,
  },
  priceText: {
    fontFamily: 'Shoulder',
    fontSize: 50,
    color: 'maroon',
  },
  productName: {
    fontFamily: 'Shoulder-Bold',
    fontSize: 25,
    marginTop: 15,
  },
  reviewStarContainer: {
    flexDirection: 'row',
    marginTop: 2,
  },
  reviewText: {
    color: 'maroon',
    fontFamily: 'Shoulder-Bold',
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  productBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});