#!/usr/bin/env sh

set -e

if [ -n "$NODE_OPTIONS" ]; then
  echo "NODE_OPTIONS=$NODE_OPTIONS"
  exit 0
fi

os_name=$(uname -s)
mem_kb=""

if [ "$os_name" = "Darwin" ]; then
  # macOS reports bytes via sysctl.
  mem_bytes=$(sysctl -n hw.memsize 2>/dev/null || echo 0)
  mem_kb=$((mem_bytes / 1024))
elif [ -r /proc/meminfo ]; then
  mem_kb=$(awk '/MemTotal/{print $2}' /proc/meminfo)
fi

if [ -z "$mem_kb" ] || [ "$mem_kb" -le 0 ]; then
  mem_kb=$((4096 * 1024))
fi

mem_mb=$((mem_kb / 1024))
max_old_space=$((mem_mb - 1024))

if [ "$max_old_space" -lt 2048 ]; then
  max_old_space=2048
fi

node_options="--max-old-space-size=${max_old_space}"
echo "NODE_OPTIONS=$node_options"
export NODE_OPTIONS="$node_options"
