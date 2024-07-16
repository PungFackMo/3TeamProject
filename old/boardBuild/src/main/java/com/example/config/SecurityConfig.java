package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

    @Bean
    public BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
        	.cors().and()	// Enable CORS
            .csrf().disable()	// CSRF 보호를 비활성화
            .authorizeHttpRequests((requests) -> requests
                    .requestMatchers("/admin/**").hasRole("ADMIN") // /admin/** 접근은 ADMIN 권한을 가진 사용자만 가능
                    .requestMatchers("/user/**").authenticated() // /user/** 접근은 인증된 사용자만 가능
                    .anyRequest().permitAll()							// 그 외의 모든 요청은 인증 필요
            )
            .formLogin((form) -> {
				try {
					form
					        .loginPage("/login")
					        .loginProcessingUrl("/loginProc") // 실제 로그인 처리 엔드 포인트
					        .usernameParameter("userId") // form에서 userName 사용
					        .defaultSuccessUrl("/loginOk")
					        .and()
					        .logout() // 로그아웃 설정
					        .logoutUrl("/logout")
					        .logoutSuccessUrl("/logoutOk")
					        .deleteCookies("JSESSIONID");
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}											// 로그인 페이지는 모든 사용자가 접근 가능
            );

        http.addFilterBefore(corsFilter(), UsernamePasswordAuthenticationFilter.class);
        // H2 콘솔을 동일 출처 정책에서 벗어나지 않도록 설정
        http.headers().frameOptions().sameOrigin();

        return http.build();	// 설정된 SecurityFilterChain 반환
    }

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000");// 리액트 서버
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }

}
