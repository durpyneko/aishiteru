{
  description = "website";
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs, ... }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
    };
  in {
    devShells = {
      x86_64-linux.default = pkgs.mkShell rec {
        buildInputs = with pkgs; [
          nodejs_24
        ];

        shellHook = ''
          echo initializing...
        '';
      };
    };
  };
}