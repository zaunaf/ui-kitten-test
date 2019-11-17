---
id: ui_kitten
title: UI Kitten 
sidebar_label: UI Kitten 
---

[![ui_kitten_logo](/images/mobile/react_native/ui_kitten_logo.png)](/images/design/power_designer/ui_kitten_logo.png).

UI Kitten adalah Framework Design System berbasis React Native yang berlisensi Open Source untuk membangun aplikasi mobile untuk Android dan IOS.

## Getting Started

Kita buat dulu aplikasi Expo:

```js
expo init ui-kitten-test
```

Pilih saja template blank.

Masuk ke foldernya
```
cd ui_kitten_test_app
```

Lalu kita install UI-Kitten
```js
expo install react-native-ui-kitten @eva-design/eva
```

### Persiapan Lingkungan Pengembangan

#### VSCode

Buka folder tersebut pada VSCode. Jangan lupa install plugin-plugin berikut:
-   React Native Tools
-   ES7 React/Redux/GraphQL/React-Native snippets (baca keterangan di halaman plugin)
-   Prettier Code formatter (gunakan Ctrl-Shift-P -> format document. Atau select all, Ctrl-K Ctrl-F)

Set juga bash sebagai terminal default, 1 untuk git, 1 untuk expo, 1 untuk emulator jika anda
tidak ingin membuka Android untuk menjalankan emulator.

[![uik_vscode](/images/mobile/react_native/uik_vscode.png)](/images/mobile/react_native/uik_vscode.png)

### Menjalankan Emulator dari Terminal
Cari PATH ke emulator anda, masukkan ke Environment. Biasanya posisinya di sini untuk windows:
`%USERPROFILE%\AppData\Local\ANdroid\Sdk\emulator`.

Jika anda sudah membuat emulator, cari daftarnya dengan
```bash
$ emulator -list-avds
3.7_WVGA_Nexus_One_API_29
Pixel_2_API_27
```
Jalankan salah satu dengan:
```bash
$ emulator -avd Pixel_2_API_27
```

### Menonaktifkan Antivirus untuk Folder Code
Tambahkan juga folder tersebut pada AntiVirus anda agar performance buildnya tidak terganggu:

[![uik_antivirus_exclusion](/images/mobile/react_native/uik_antivirus_exclusion.png)](/images/mobile/react_native/uik_antivirus_exclusionpng)

Dengan account firebase anda, buat juga project dengan nama `ui-kitten-test` untuk memudahkan.


### Memulai Coding

Ubah `App.js` jadi seperti ini:
```js
import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';

const ApplicationContent = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Welcome to UI Kitten</Text>
  </Layout>
); 

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <ApplicationContent />
  </ApplicationProvider>
);

export default App;
```

Buat terminal baru, jalankan aplikasi dengan expo:
```
expo start
```

Setelah expo siap, jika emulator ada android pencet `a`. Jika ios pencet `i`.

Jika muncul "Welcome to UI Kitten", maka aplikasi sudah siap untuk dikembangkan.


## Desain Aplikasi

Kita akan mencoba membuat Aplikasi semacam Market Place dengan style tab. 
Struktur screennya sebagai berikut:
```
-   Main Navigation
    -   SplashScreen
        >   Signup Screen (stacked)
            >   Email, phone (carrousel)

    -   MainScreen
        =   Title Bar Nav
            >   Alerts
                -   Alerts Screen
            >   Chat
                -   Chatlist Screen
                    >   Chat Screen
        =   Tab Nav
            >   Home (MainScreen)
                -   Ads / Picture News block
                -   Services Icon
                    >  Education Plans
                       >  Education Plans Screen
                    >  Support Services
            >   Updates
                -   News/Feed Screen
                    >  News Detail
                -   Mailbox Screen
                    >  Message Screen
            >   Monitor
                -   Monitor Dashboard Screen
                    -  Scroll pictures for kids
                    >  Edit Profile link
                    -  Block calendar presence
                    >  Position link
                       -  Position map screen
                    -  Leaderboard Chart (candlestick style)
                    -  Last test/exams.
                    -  Homework List
            >   Transaction
                -   TransactionList Screen
                    -  TransactionDetail Screen
            >   Profile
                >   Profile Screen
                    >   Edit Profile Screen
                    >   AddEditChildScreen
```

## Screens

Ada cukup banyak screen di list di atas, kita mulai dengan membuat screen yang utama dulu: 
`SplashScreen.js` dan `MainScreen.js`. Buat dulu folder `screens`.

### Splash Screen dengan Icon

Pastikan icon dan dependency-nya terinstall. Biasakan untuk membuat dua terminal, satu untuk expo
dan menginstal dependency, satu terminal bebas untuk  manajemen git.
Untuk persiapkan icon kita install dulu semua. Matikan expo server, lalu jalankan ini:

```bash
expo install react-native-svg
expo install @ui-kitten/eva-icons
```

> **Catatan:** Sebenarnya anda dapat menggunakan yarn untuk menginstall dependency. Tapi pengalaman penulis
jika anda tidak menggunakan expo sebagai dependency manager, pada saat runtime expo kerap mengeluh ketidakcocokan
versi dengan bawaannya. Ini karena SDK release terakhir expo biasanya masih tertinggal versinya dibanding library-library 
sekitar react-native yang sudah release. Nah agar tidak pusing kepala dan membuang waktu, sangat disarankan
untuk mengikuti aturan ini.


Berikut code `screens/SplashScreen.js`:
```js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button, Layout, Text } from 'react-native-ui-kitten';

export const GoogleIcon = (style) => (
    <Icon name='google' {...style} />
);
  
export const LoginButton = () => (
    <Button icon={GoogleIcon}>Login with Google</Button>
);

const SplashScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
    <Button icon={GoogleIcon} >Login with Google</Button>
    <Text style={{color: 'blue', marginTop: 15}}>Skip</Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginVertical: 16 }
});

export default SplashScreen;
```

### Menyesuaikan App

Lalu kita sesuaikan `App.js`:
```js
import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout, Text } from 'react-native-ui-kitten';
import SplashScreen from './screens/SplashScreen';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <SplashScreen />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
```

Untuk menambahkan `<SplashScreen />` anda langsung aja ketik di antara <ApplicationProvider>
dan gunakan code completionnya. Code `import SplashScreen .. ` akan muncul dengan sendirinya.

[![uik_splash_screen](/images/mobile/react_native/uik_splash_screen.png)](/images/mobile/react_native/uik_splash_screen.png)

### Membuat MainScreen

Berikut code `screens/MainScreen.js`:
```js
import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

const MainScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Text>Main Screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainScreen;
```

## Navigasi

Anda mungkin familiar dalam hal navigasi antar modul aplikasi pada Native Android.
Cukup rumit bukan? Bagaimana cara membuat navigasi tab, menambahkan frame, mendeteksi event,
melakukan intent serta wiring data yang cukup merepotkan. Nah dengan react native semua lebih praktis
dengan adanya `react-navigation`.

### Instalasi 

Kita install dulu `react-navigation` dengan yarn:
```bash
expo install react-navigation
expo install react-native-gesture-handler react-native-reanimated
```

### MainNavigator

Buat folder `navigation`, tambahkan file `navigation/MainNavigator.js`:
```js
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';

const MainNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    Main: MainScreen
},{
    initialRouteName: 'Splash'
});

export default createAppContainer(MainNavigator); 
```

### Tipe-tipe Navigator

Ada beberapa tipe navigator yang bisa kita pakai. Secara garis besar ada  :
-   Tab Navigation
-   Drawer Navigation
-   Stack Navigation
-   Switch Navigation

Kita bisa mempelajari lebih jauh di sini konsepnya di referensi berikut: 
https://reactnavigation.org/docs/en/tab-based-navigation.html

Di sini kita menggunakan `switchNavigator`. Artinya screen yang menjadi sasaran
akan menggantikan screen sebelumnya. Jika user menekan back, maka aplikasi akan keluar.

### Linking Navigation

Karena Google uthentication kita belum beroperasi, kita gunakan skip dulu untuk ke MainScreen:
Ubah baris teks `Skip` di `SplashScreen.js` menjadi seperti ini:
```js
<Text style={{color: 'blue', marginTop: 15}} onPress={()=> { props.navigation.navigate('Main'); }}>Skip</Text>
```

Hasilnya:
[![uik_splash_skip_nav](/images/mobile/react_native/uik_splash_skip_nav.gif)](/images/mobile/react_native/uik_splash_skip_nav.gif)


## Navigasi Tab

Sekarang kita akan menambahkan tab beserta screen yang menjadi sasaran tab.


## Membuat Screen-Screen Anggota Tab

Kita buat screen2nya dulu:

`UpdatesScreen.js`:
```js
import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

const UpdatesScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Text>Updates Screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default UpdatesScreen;
```

`MonitorScreen.js`:
```js
import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

const MonitorScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Text>Monitor Screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MonitorScreen;
```


`TransactionScreen.js`:
```js
import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

const TransactionScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Text>Transaction Screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TransactionScreen;
```

`ProfileScreen.js`:
```js
import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";

const ProfileScreen = props => {
  return (
    <Layout style={styles.screen}>
      <Text>Profile Screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProfileScreen;
```

### Menginstall Library Tab

Saat dokumentasi ini ditulis, fungsi `createBottomTabNavigator` untuk membuat
tab di bagian bawah aplikasi sudah dipisahkan di package sendiri. Maka kita install dulu:

```bash
expo install react-navigation-tabs
```

### Mengupdate Main Navigator

Kemudian kita update `navigator/MainNavigator.js` menjadi seperti ini:
```js
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';
import UpdatesScreen from '../screens/UpdatesScreen';
import MonitorScreen from '../screens/MonitorScreen';
import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Buat Tab Navigator. MainScreen turun menjadi anggotanya
const mainTabNavigatorCfg =   {
    Home: {
      screen: MainScreen
    },
    Updates: {
      screen: UpdatesScreen
    },
    Monitor: {
      screen: MonitorScreen
    },
    Transaction: {
      screen: TransactionScreen
    },
    Profile: {
      screen: ProfileScreen
    }
};

const MainTabNavigator = createBottomTabNavigator(mainTabNavigatorCfg);

// MainScreen Diganti MainTabNavigator
const MainNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    Main: MainTabNavigator
},{
    initialRouteName: 'Splash' 
});


export default createAppContainer(MainNavigator); 
```

Berikut hasilnya:
[![uik_main_tab_nav](/images/mobile/react_native/uik_main_tab_nav.gif)](/images/mobile/react_native/uik_main_tab_nav.gif)

### Menambahkan Icon pada Tab

Expo sudah memberikan wrapping yang baik terhadap vector icons. Baca dokumentasinya di sini:
https://docs.expo.io/versions/latest/guides/icons/

Untuk referensi icon yang bisa dipakai, buka di sini:
https://expo.github.io/vector-icons/

Kita install dulu:
```js
expo install --save @expo/vector-icons
```

Jika anda sudah menentukan icon, kita coba. Ubah `mainTabNavigatorCfg` menjadi berikut:
```js
import { Feather, FontAwesome } from '@expo/vector-icons';
...

const mainTabNavigatorCfg =   {
    Home: {
      screen: MainScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="home" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Updates: {
      screen: UpdatesScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <FontAwesome name="newspaper-o" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Monitor: {
      screen: MonitorScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="activity" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Transaction: {
      screen: TransactionScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="repeat" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: (tabInfo) => {
          return <Feather name="user" size={25} color={tabInfo.tintColor} />;
        }
      }
    }
};
```
Konfigurasi di atas menampilkan icon dan menyembunyikan labelnya. Jika anda
ingin menampilkan label, hapus saja bagian ini di tiap tab:
```js
        tabBarOptions: {
          showLabel: false
        },
```

[![uik_bottom_nav_icons](/images/mobile/react_native/uik_bottom_nav_icons.png)](/images/mobile/react_native/uik_bottom_nav_icons.png)


### Menambahkan Badge pada Tab

Mungkin anda ingin menambahkan badge pada icon anda, yang misalnya memberi tahu
bahwa ada sejumlah sekian berita baru atau alert baru dari aplikasi.

> **Catatan:** Jika anda mengikuti tutorial ini dari repo git, anda akan menemukan
bahwa sebelumnya kami menggunakan  `react-native-icon-badge`, namun ternyata lebih praktis
menggunakan `Badge` dari `react-native-elements`.

Kita install dulu:
```bash
expo install react-native-elements
```

Kita buat fungsi penempel badge yang dapat menempelkan badge langsung pada `Icon`.
Taruh saja di `components/badgedIcons/withBadge.js`:
```js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge } from "react-native-elements";

const withBadge = (value, options = {}) => WrappedComponent =>
  class extends React.Component {
    render() {
      const { top = -5, right = -20, left = 0, bottom = 0, hidden = !value, ...badgeProps } = options;
      const badgeValue = typeof value === "function" ? value(this.props) : value;
      let width = (value > 10) ? (value > 100) ? 26 : 21 : 18;
      
      const styles = StyleSheet.create({
        badge: {
          borderRadius: 9,
          height: 18,
          minWidth: 0,
          width: width
        },
        badgeContainer: {
          position: "absolute"
        },
        badgeText: {
          fontSize: 10,
          paddingHorizontal: 0
        }
      });

      return (
        <View>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              status="error"
              containerStyle={[styles.badgeContainer, { top, right, left, bottom }]}
              {...badgeProps}
            />
          )}
        </View>
      );
    }
  };

export default withBadge;
```

Setelah itu kita buat komponen2 yang membungkus icon2 standard dari expo menjadi badged.
Agar mudah kita taruh di `components/badgedIcons/index.js`:
```js
import React from "react";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import withBadge from './withBadge';

export const FeatherBadgedIcon = (props) => {
    const Icon = withBadge(props.count)(Feather);
    return <Icon {...props} />
}

export const FontAwesomeBadgedIcon = (props) => {
    const Icon = withBadge(props.count)(FontAwesome);
    return <Icon {...props} />
}

export const IoniconsBadgedIcon = (props) => {
    const Icon = withBadge(props.count)(Ionicons);
    return <Icon {...props} />
}
```

Setelah itu kita terapkan pada icon Updates pada tab di file `MainNavigator.js` :
```js
    Updates: {
      screen: UpdatesNavigator,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        tabBarIcon: ({tintColor}) => {
          return (
            <FontAwesomeBadgedIcon name='newspaper-o' count={5} size={25} color={tintColor} />
          );
        }
      }
    },
```

Hasilnya sbb:
[![uik_bottom_nav_icons_with_badge](/images/mobile/react_native/uik_bottom_nav_icons_with_badge.png)](/images/mobile/react_native/uik_bottom_nav_icons_with_badge.png)


Nilai count pada badge ini harus diubah2 jika sesuai jumlah notifikasinya. Itu harus disimpan dalam state, dan harus ada kalkulasinya. Akan kita bahas di materi berikutnya nanti.


## Menambahkan Header secara Instan
React Navigation Tab tidak secara default menambahkan header pada screen.  Ini karena banyak app yang tidak 
menyeragamkan setiap tabnya dengan ada headerTitle. Ini sebenarnya praktek yang baik. Jika memang kita membutuhkan
title header, lebih baik buat stack navigation lagi untuk setiap screen dan memunculkan header jika kita membutuhkan.

Namun jika aplikasi kita simpel dan pada setiap tab kita ingin memunculkan judul, drawer dan button yang sama,
kita bisa menambahkan `navigationOptions` pada NavigationTab yang sudah kita set kemudian membungkus tab tadi 
dengan navigation stack sebelum dirangkai pada switchNavigator bersama2 splash screen.

### Menginstall 
Karena kita akan menggunakan `createStackNavigator`, kita install dulu:
```
expo install react-navigation-stack
```

### Menambahkan Header dengan Wrapping Stack

Kita tambahkan codenya
```js
...
import { createStackNavigator } from 'react-navigation-stack';
...
const MainTabNavigator = createBottomTabNavigator(mainTabNavigatorCfg);

// Add header Titles to MainTabNavigator Tabs
MainTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  switch (routeName) {
    case 'Home':
      title = 'UIK Test App';
      break;
    case 'Updates':
      title = 'Updates';
      break;
    case 'Monitor':
      title = 'Monitor';
      break;
    case 'Transaction':
      title = 'Transaction';
      break;
    case 'Profile':
      title = 'Profile';
      break;
  }
  return {
    title,
  };
};

// Membungkus MainTabNavigator dalam MainTabNavigatorStack
const MainStackNavigator = createStackNavigator({
  Root: {
    screen: MainTabNavigator
  }
});

// MainScreen Diganti MainTabNavigator
const MainNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    Main: MainStackNavigator
},{
    initialRouteName: 'Splash'
});
...

```

Hasilnya:
[![uik_tab_nav_header_titles](/images/mobile/react_native/uik_tab_nav_header_titles.gif)](/images/mobile/react_native/uik_tab_nav_header_titles.gif)


## Reorganisasi Header dengan Menu Icon

Jalur yang paling tepat untuk menambahkan header adalah dengan melengkapi aplikasi.
Ini karena aplikasi yang besar biasanya setiap tab memiliki screen-screen lain yang 
harus ditampilkan secara stacking. Bisa dilihat pula, desain aplikasi kita di atas
pun sudah seperti itu.

### Menambahkan Theme Warna

Aplikasi biasanya memiliki tema warna. Khususnya aplikasi di bawah android,  
konsistensinya setidaknya ada berupa di screen-screen dengan back navigation.
Kita coba integrasikan di sini. Sebelumnya silakan cari dulu kombinasi warna yang
sesuai dengan selera anda. Sebagai contoh anda bisa coba https://coolors.co/app

Kita tambah di file `constants/Colors.js`. Sebagai contoh isinya:
```js
export default {
    primaryColor: '#6AB187',
    primaryVariant: '#20948B',
    secondaryColor: '#DE7A22',
    secondaryVariant: '#F4CC70',
}
```

Colors ini kita bisa import di mana saja kita butuh theming/pewarnaan:
```js
import Colors from "../constants/Colors";
```

### Melengkapi Folder dan Screen

Kita coba melengkapi aplikasi. Pertama kita buat folder2 di bawah ini, dan
menambahkan file2 di bawahnya:
```
+   Main
    AlertScreen.js
    ChatScreen.js
+   Monitor
    PositionScreen.js
+   Profile
    AddEditChildScreen.js
    EditProfileScreen.js
+   Transaction
    TransactionDetailScreen.js
+   Updates
    MailDetailScreen.js
    NewsDetailScreen.js
```
> Catatan: Organisasi folder ini penting khususnya untuk Aplikasi yang akan
berkembang menjadi besar. Makin terorganisir makin mudah mengelolanya.

Untuk isinya, buat saja file generik seperti di atas, yang penting menampilkan
informasi screen apa yang sedang tampil.

### Melengkapi Navigasi

Kita lengkapi screen sesuai desain. Kita pisahkan masing-masing berupa StackNavigation.
```js
import Colors from "../constants/Colors";

// Reusable Options yang disesuaikan dengan Platform
const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor:
    Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen"
};

// HomeNavigator
const HomeNavigator = createStackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      headerTitle: 'UIK Test App'
    }
  },
  Alert: { 
    screen: AlertScreen,
    navigationOptions: {
      headerTitle: 'Alert'
    }

  },
  Chat: { 
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: 'Chat'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});

// ProfileNavigator
const UpdatesNavigator = createStackNavigator({
  Updates: {
    screen: UpdatesScreen,
    navigationOptions: {
      headerTitle: 'Updates'
    }
  },
  News: {
    screen: NewsScreen,
    navigationOptions: {
      headerTitle: 'News'
    }
  },
  Mail: {
    screen: MailScreen,
    navigationOptions: {
      headerTitle: 'Mail'
    }
  },
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});

// MonitorNavigator
const MonitorNavigator = createStackNavigator({
  Monitor: {
    screen: MonitorScreen,
    navigationOptions: {
      headerTitle: 'Activities'
    }
  },
  Position: { 
    screen: PositionScreen,
    navigationOptions: {
      headerTitle: 'Position'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});


// TransactionNavigator
const TransactionNavigator = createStackNavigator({
  Transaction: {
    screen: TransactionScreen,
    navigationOptions: {
      headerTitle: 'Transaction'
    }
  },
  TransactionDetail: { 
    screen: TransactionDetailScreen,
    navigationOptions: {
      headerTitle: 'Transaction Detail'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});

// ProfileNavigator
const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  },
  AddEditChild: { 
    screen: AddEditChildScreen,
    navigationOptions: {
      headerTitle: 'Childs'
    }
  },
  EditProfile: { 
    screen: EditProfileScreen,
    navigationOptions: {
      headerTitle: 'Edit Profile'
    }
  }
},{
  defaultNavigationOptions: defaultStackNavigationOptions
});
```

Setelah itu kita edit tab agar tidak langsung memanggil screen tapi memanggil navigatornya masing2:
```js
...
const mainTabNavigatorCfg =   {
    Home: {
      screen: HomeNavigator,
      ...

    Updates: {
      screen: UpdatesNavigator,
      ...

    Monitor: {
      screen: MonitorNavigator,
      ...

    Transaction: {
      screen: TransactionNavigator,
      ...

    Profile: {
      screen: ProfileNavigator,
      ...

```

[![uik_tab_nav_header_titles_color](/images/mobile/react_native/uik_tab_nav_header_titles_color.gif)](/images/mobile/react_native/uik_tab_nav_header_titles_color.gif)

### Menambahkan Tombol Icon untuk Membuka Child Screen

Tombol icon cukup sederhana sebenarnya. Kita bisa pakai komponen yang sudah ada.
yaitu `react-navigation-header-buttons`. 

#### Installing

Kita install dulu:
```
expo install react-navigation-header-buttons
```

#### Membuat Komponen HeaderButton

Sebelum menggunakan, kita perlu membuat dulu komponen HeaderButton sesuai dengan icon yg akan dipakai.
Agar fleksibel, kita buat 2 komponen, FeatherHeaderButton dan FontAwesomeHeaderButton. Kita masukkan juga
support badged agar nanti tombol ini mudah ditandai. Supaya mudah diimport kita satukan dalam satu file 
`components/headerButtons/index.js`:

```js
import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import withBadge from "../badgedIcons/withBadge";

export const FeatherHeaderButton = props => {
  const BadgedIcon = withBadge(props.count)(Feather);
  return (
    <HeaderButton
      {...props}
      IconComponent={BadgedIcon}
      iconSize={23}
      color={(Platform.OS === 'android') ? 'white' : Colors.primaryColor}
    />
  );
};

export const FontAwesomeHeaderButton = props => {
    const BadgedIcon = withBadge(props.count)(FontAwesome);
    return (
      <HeaderButton
        {...props}
        IconComponent={BadgedIcon}
        iconSize={23}
        color={(Platform.OS === 'android') ? 'white' : Colors.primaryColor}
      />
    );
  };
```
#### Menggunakan Header Button

Kembali ke `navigator/MainNavigator.js`, kita tambahkan:

```js
...
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { FeatherHeaderButton, FontAwesomeHeaderButton } from '../components/headerButtons';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { FeatherBadgedIcon, FontAwesomeBadgedIcon } from '../components/badgedIcons';
```

Dan kita ubah `HomeNavigator` jadi seperti ini:
```js
const HomeNavigator = createStackNavigator({
  Home: {
    screen: MainScreen,
    // Ambil navigation sebagai parameter agar bisa navigate()
    navigationOptions: ({ navigation }) => {
      return ({
        headerTitle: 'UIK Test App',
        headerRight: (
          <HeaderButtons HeaderButtonComponent={FeatherHeaderButton}>
            <Item
              title="Alert"
              // badge count. Jika == 0, badge hilang
              count={13}
              // Pilih icon
              iconName="bell"
              // Buka AlertScreen sebagai stack
              onPress={() => {
                navigation.navigate("Alert")
              }}
            />
            <Item
              title="Chat"
              // badge count
              count={313}
              // Pilih icon
              iconName="message-square"
              // Buka ChatScreen sebagai stack
              onPress={() => {
                navigation.navigate("Chat")
              }}
            />
          </HeaderButtons>
        )
      });
    }
  },
```

Hasilnya:
[![uik_headerbtn_badged](/images/mobile/react_native/uik_headerbtn_badged.gif)](/images/mobile/react_native/uik_headerbtn_badged.gif)

Selanjutnya kita kerjakan hal yang sama untuk Profil (Edit, icon Pencil ke EditProfileScreen).


## Menambahkan Modul Mockup dari UI Kitten

Sebagaimana tujuan dari tutorial ini, kita menggunakan UI Kitten untuk membangun quick mock-up aplikasi mobile.
Kita sudah punya cukup banyak screen (atau _container_ dalam istilah UI Kitten) yang kita bisa langsung use.

Mohon perhatikan secara terperinci step-step yang diuraikan berikut ini:

Pertama install requistry modul UIKitten:
```bash
expo install expo-media-library expo-permissions expo-camera react-native-keyboard-aware-scroll-view
```

Sambil menunggu, buka **bash shell** baru dan clone **kittenTricks**, aplikasi demo UI Kitten di folder lain.
```bash
git clone https://github.com/akveo/kittenTricks.git
```

Masuk ke folder `kittenTricks` kemudian install
```bash
yarn install
```

Pada folder ini sudah ada terinstall typescript compiler dan file konfiguraisinya, `tsconfig.ts`.
Kita bisa melihat isinya:
```js
{
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/tsc-out",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "jsx": "react-native",
    "module": "es2015",
    "target": "es2017",
    "lib": [
      "es2015",
      "es2016"
    ],
    "paths": {
      "@src/*": ["./src/*"],
      "@kitten/*": ["./node_modules/react-native-ui-kitten/*"]
    },
    "typeRoots": [
      "./node_modules/@types"
    ]
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "./node_modules"
  ]
}
```
Untuk tahu bahwa typsecript compiler outputnya di `./dist/tsc-out`.
Jalankan di bash shell anda (jangan pakai `cmd`, script tsc adalah script bash):
```bash
./node_modules/typescript/bin/tsc -w
```

Kemudian cek `dist/tsc-out`. Rename `tsc-out` menjadi `kitten`, kemudian salin ke folder
proyek anda. Di root proyek anda ada `babel.config.js`, ubah menjadi seperti ini:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@src': './kitten',
            '@kitten': 'react-native-ui-kitten',
          },
        },
      ],
    ],
  };
};
```
Tambahkan juga di `.gitignore` agar folder kitten ini tidak memenuh2i repo anda:
```
kitten/
```

Salin file-file asset dari folder src di `kittenTricks` ke folder yg sama di bawah `kitten`:
```js
assets\fonts\*
assets\icons\*
assets\images\*
```

Nah sekarang kita sudah siap untuk me-reuse screen-screen pada kittenTricks.

### Menambahkan Screen untuk Modul Home

Untuk home kita ambil dari `ProductsListContainer`. Ubah file `screens/MainScreen.js`:
```js
import { ProductsListContainer } from '@src/containers/layouts/ecommerce';

const MainScreen = props => {
  return (
    <Layout style={styles.screen}>
      <ProductsListContainer {...props} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10
  }
});
```
Jangan lupa sesuaikan sampai stylesnya.


### Menambahkan Screen untuk Modul Chat

Untuk modul chat mengambil dari `ConversationsListContainer`. Ubah di `screens/Home/ChatScreen.js`:
```js
import { ConversationsListContainer } from '@src/containers/layouts/messaging';

const ChatScreen = props => {
  return (
    <Layout style={styles.screen}>
      <ConversationsListContainer {...props} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ChatScreen;
```
Jangan lupa sesuaikan sampai stylesnya .

### Menambahkan Screen untuk Modul Updates

Modul Updates sejatinya berupa berita. Kita update dari `ArticleList1Container`:

```js
import { ArticleList1Container } from '@src/containers/layouts/articles';

const UpdatesScreen = props => {
  return (
    <Layout style={styles.screen}>
      <ArticleList1Container {...props} />
    </Layout>
  );
};
```

### Menambahkan Screen untuk Modul Profile

Ada beberapa container yang bagus untuk profile. Silakan pilih salah satu. 
Kita di sini menggunakan  `ProfileSettings1Container`:

```js
import { ProfileSettings1Container } from "@src/containers/layouts/social";

const ProfileScreen = props => {
  return (
    <View style={styles.screen}>      
      <ProfileSettings1Container {...props} style={{width: "100%"}} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProfileScreen;

```
Sesuakan sampai stylesnya juga.

Hasilnya begini:

[![uik_link_kitten_mockups](/images/mobile/react_native/uik_link_kitten_mockups.gif)](/images/mobile/react_native/uik_link_kitten_mockups.gif)


### Alternatif Navigasi

Kita bisa lihat bahwa navigasi kita agak kurang enak dilihat. Tab terlalu mendominasi. Lebih baik sepertinya jika
ketika child tab dibuka, dia menutup tabnya. 

Kita coba pertama kita hapus anak-anak screen dari tiap tab (biarkan stacknya), pindahkan bersama MainTabNavigator ke `MainNav`,
sehingga antara MaintTab dengan anak2 itu sejajar.

```js
const MainNav = createStackNavigator({
  MainTabNav: {
    screen: MainTabNavigator,
    navigationOptions: {
      // headerMode: 'none'
      header: null
    }
  },
  Alert: { 
    screen: AlertScreen,
    navigationOptions: {
      headerTitle: 'Alert'
    }
  },
  Chat: { 
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: 'Chat'
    }
  },
  // Updates
  News: {
    screen: NewsScreen,
    navigationOptions: {
      headerTitle: 'News'
    }
  },
  Mail: {
    screen: MailScreen,
    navigationOptions: {
      headerTitle: 'Mail'
    }
  },
});
```

Lalu ganti di MainNavigator untuk posisi Main diganti MainNav tadi:
```js
const MainNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    Main: MainNav
},{
    initialRouteName: 'Splash'
});
```

