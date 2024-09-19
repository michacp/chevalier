import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;

@Injectable({
  providedIn: 'root'
})
export class TiktokService {
 

  // async postData() {
  //   const payload = {
  //     url: "https://api16-normal-c-useast2a.tiktokv.com/aweme/v1/commit/follow/user/?user_id=2342342&type=1manifest_version_code=2023301020&_rticket=1709095423862¤t_region=DE&app_language=de&iid=0&channel=huaweistore&device_type=JNY-LX1&language=de&locale=de-DE&resolution=2208*1080&openudid=862354e82ba89e61&update_version_code=2023301020&ac2=wifi5g&cdid=7a5108c4-1ce7-4807-a5d1-c428ed5c895d&sys_region=DE&os_api=29&timezone_name=Europe%2FBerlin&dpi=480&carrier_region=DE&ac=wifi&device_id=1&mcc_mnc=28601&os_version=10&timezone_offset=3600&version_code=330102&app_name=musical_ly&version_name=33.1.2&device_brand=huawei&op_region=DE&ssmix=a&device_platform=android&build_number=33.1.2®ion=DE&aid=1233&ts=1709095423&passport-sdk-version=19&uoo=0&cronet_version=4.2.137.43-tiktok&ttnet_version=2fdb62f9_2023-09-06&use_store_region_cookie=1",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //       "cookie": "passport_csrf_token=e8b45654654656548f5642343426565460d00763b; passport_csrf_token_default=e8b45654654656548f5642343426565460d00763b;",
  //       "passport-sdk-version": "19",
  //       "sdk-version": "2",
  //       "user-agent": "com.zhiliaoapp.musically/2023301020 (Linux; U; Android 10; de_DE; 10; JNY-LX1; Build/OPHZ.604442.570)",
  //       "x-ss-dp": "1233",
  //       "x-tt-local-region": "de",
  //       "x-tt-store-region": "de",
  //       "x-tt-store-region-src": "did",
  //       "x-tt-trace-id": "00-ee06b309101a704d1-ee06b309101a704d-01"
  //     },
  //     data: "",
  //     lc_x: "208700416",
  //     sdk_ver: "v05.00.06-alpha.10-ov-android",
  //     get_token: ""
  //   };

  //   const headers = {
  //     'api-key': '+J/QhUjPzNo9/FMQrNnS6IVJ1xu4HhWFfzza+5xaOWZVY4anNaXAY687KgLGXzs1uR9YickENpKgCPLFc9QhFUwW0Pk=',
  //     'Content-Type': 'application/json'
  //   };

  //   try {
  //     const response = await axios.post(this.url, payload, { headers });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

 
}