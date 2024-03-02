package br.com.fms.authentication;

import br.com.fms.authentication.controller.AuthController;
import br.com.fms.authentication.controller.TestController;
import br.com.fms.authentication.model.ERole;
import br.com.fms.authentication.model.Role;
import br.com.fms.authentication.payload.request.LoginRequest;
import br.com.fms.authentication.payload.request.SignupRequest;
import br.com.fms.authentication.payload.response.JwtResponse;
import br.com.fms.authentication.payload.response.MessageResponse;
import br.com.fms.authentication.repository.RoleRepository;
import br.com.fms.authentication.repository.UserRepository;
import br.com.fms.authentication.security.jwt.JwtUtils;
import br.com.fms.authentication.service.UserDetailsImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import br.com.fms.authentication.model.User;
import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class AuthenticationApplicationTests {
	@InjectMocks
	private AuthController authController;


	@Mock
	private UserRepository userRepository;

	@Mock
	private RoleRepository roleRepository;

	@Mock
	private PasswordEncoder passwordEncoder;


	@Mock
	private AuthenticationManager authenticationManager;

	@Mock
	private JwtUtils jwtUtils;

	@Mock
	private UserDetailsImpl userDetails;

	@Test
	public void testRegisterUser_Success() {
		Role roleUser = new Role();
		roleUser.setId("1");
		roleUser.setName(ERole.ROLE_USER);
		Mockito.when(roleRepository.findByName(ERole.ROLE_USER)).thenReturn(Optional.of(roleUser));

		// Create a SignupRequest object
		SignupRequest request = new SignupRequest();
		request.setUsername("testuser");
		request.setEmail("testuser@example.com");
		request.setPassword("testpassword");
		request.setRoles(Collections.singleton("ROLE_USER"));

		// Call the controller method
		ResponseEntity<?> response = authController.registerUser(request);

		// Verify response
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("User registered successfully!", ((MessageResponse) response.getBody()).getMessage());
	}

	@Test
	public void testAuthenticateUser_Success() {
		// Prepare test data
		String username = "testuser";
		String password = "testpassword";
		String email = "testuser@example.com";
		String encodedPassword = "encodedPassword";
		User user = new User(username, email, encodedPassword);
		user.setId("1");

		// Mock UserRepository behavior
		Mockito.when(userRepository.findByUsername(username)).thenReturn(Optional.of(user));

		// Mock PasswordEncoder behavior
		Mockito.when(passwordEncoder.matches(password, encodedPassword)).thenReturn(true);

		// Mock AuthenticationManager behavior
		Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, password);
		Mockito.when(authenticationManager.authenticate(Mockito.any(Authentication.class))).thenReturn(authentication);

		// Mock JwtUtils behavior
		String token = "mocked_token";
		Mockito.when(jwtUtils.generateJwtToken(Mockito.any())).thenReturn(token);

		// Create a LoginRequest object
		LoginRequest request = new LoginRequest();
		request.setUsername(username);
		request.setPassword(password);

		// Call the controller method
		ResponseEntity<?> response = authController.authenticateUser(request);

		// Verify response
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertNotNull(response.getBody());
		assertEquals(token, ((JwtResponse) response.getBody()).getToken());
	}

}


