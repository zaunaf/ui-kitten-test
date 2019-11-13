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

Jika anda sudah menentukan icon, kita coba. Ubah `mainTabNavigatorCfg` menjadi berikut:

```js
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

Kita install dulu:
```bash
expo install react-native-icon-badge 
```

Kemudian kita update salah satu icon, misal Updates:
```js
    Updates: {
      screen: UpdatesScreen,
      navigationOptions: {
        tabBarOptions: {
          showLabel: false
        },
        // tabBarIcon: (tabInfo) => {
        //   return <FontAwesome name="newspaper-o" size={25} color={tabInfo.tintColor} />;
        // }
        tabBarIcon: ({tintColor}) => {
          return (
            <IconBadge
              MainElement={<FontAwesome name='newspaper-o' size={25} color={tintColor} />}
              BadgeElement={<Text style={{ color: 'white' }}>{3}</Text>}
              IconBadgeStyle={{top: -8, right: -8, width:20, height:20, backgroundColor: '#FF0000'}}
              Hidden={false}
            />
          );
        }
      }
    },
```

[![uik_bottom_nav_icons_with_badge](/images/mobile/react_native/uik_bottom_nav_icons_with_badge.png)](/images/mobile/react_native/uik_bottom_nav_icons_with_badge.png)


Nilai count, dimensi, offset badge ini harus diubah2 jika jumlah notifikasinya
makin besar. Itu harus disimpan dalam state, dan harus ada kalkulasinya. Akan kita bahas di materi berikutnya nanti.


## Menambahkan Header
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


