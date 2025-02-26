import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WishlistContext } from './WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const renderItem = ({ item, index }) => (
    <View style={[styles.itemContainer, index % 2 === 0 ? styles.pinkRow : styles.peachRow]}>
      {/* Thumbnail Image */}
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      {/* Place Name */}
      <Text style={styles.placeName}>{item.name}</Text>
      {/* Heart Icon for Removal */}
      <TouchableOpacity onPress={() => removeFromWishlist(item.id)}>
        <Icon name="favorite" size={24} color="#FFA726" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Wishlist</Text>
      {/* Wishlist Items */}
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>Your wishlist is empty.</Text>}
      />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  pinkRow: {
    backgroundColor: '#FFD1DC', // Soft pink
  },
  peachRow: {
    backgroundColor: '#FFE5B4', // Peach
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  placeName: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'serif',
    color: '#333',
  },
  heartIcon: {
    fontSize: 20,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
});

export default Wishlist;