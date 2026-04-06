{
  description = "Ambiente de desenvolvimento para o Marques Portfolio";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_20
        typescript
        
        typescript-language-server 
        tailwindcss-language-server
      ];

      shellHook = ''
        echo "Hello There!"
        echo "Node version: $(node -v)"
      '';
    };
  };
}
